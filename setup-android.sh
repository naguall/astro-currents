#!/bin/bash
# AstroAtlas — Android setup script
# Run this AFTER: npx cap add android
# Usage: bash setup-android.sh

set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
ANDROID="$ROOT/android"

echo "🤖 AstroAtlas Android Setup"
echo "================================"

# ── 1. Icons ──────────────────────────────────────
echo "🎨 Copying icons..."

# Remove adaptive icon XML folders — they override PNGs and show wrong icon
rm -rf "$ANDROID/app/src/main/res/mipmap-anydpi-v26"
rm -rf "$ANDROID/app/src/main/res/mipmap-anydpi"
echo "  ✓ Removed adaptive icon XML overrides"

copy_icon() {
  src="$ROOT/icons/$1"
  dst="$ANDROID/app/src/main/res/$2/ic_launcher.png"
  dst_round="$ANDROID/app/src/main/res/$2/ic_launcher_round.png"
  mkdir -p "$ANDROID/app/src/main/res/$2"
  cp "$src" "$dst"
  cp "$src" "$dst_round"
  echo "  ✓ $2"
}
copy_icon "android_mdpi_48x48.png"      "mipmap-mdpi"
copy_icon "android_hdpi_72x72.png"      "mipmap-hdpi"
copy_icon "android_xhdpi_96x96.png"     "mipmap-xhdpi"
copy_icon "android_xxhdpi_144x144.png"  "mipmap-xxhdpi"
copy_icon "android_xxxhdpi_192x192.png" "mipmap-xxxhdpi"

# ── 2. AlarmAudioPlugin.java ───────────────────────
echo "🔔 Installing AlarmAudioPlugin..."
JAVA_DIR="$ANDROID/app/src/main/java/com/astrocurrents/app"
mkdir -p "$JAVA_DIR"

cat > "$JAVA_DIR/AlarmAudioPlugin.java" << 'JAVA'
package com.astrocurrents.app;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTrack;
import android.os.Build;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AlarmAudio")
public class AlarmAudioPlugin extends Plugin {
    private static final int SAMPLE_RATE = 44100;
    private AudioTrack audioTrack;
    private Thread playThread;
    private volatile boolean playing = false;

    @PluginMethod
    public void playTones(PluginCall call) {
        JSArray freqArray = call.getArray("frequencies");
        float vol = call.getFloat("volume", 0.85f);
        int[] freqs;
        try {
            freqs = new int[freqArray.length()];
            for (int i = 0; i < freqArray.length(); i++) freqs[i] = freqArray.getInt(i);
        } catch (Exception e) { freqs = new int[]{528}; }
        stopAudio();
        playing = true;
        final int[] finalFreqs = freqs;
        final float finalVol = vol;
        playThread = new Thread(() -> {
            int bufSize = Math.max(AudioTrack.getMinBufferSize(SAMPLE_RATE, AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_16BIT), SAMPLE_RATE / 10);
            AudioTrack track;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                AudioAttributes attrs = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_ALARM)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION).build();
                AudioFormat fmt = new AudioFormat.Builder()
                    .setSampleRate(SAMPLE_RATE).setEncoding(AudioFormat.ENCODING_PCM_16BIT)
                    .setChannelMask(AudioFormat.CHANNEL_OUT_MONO).build();
                track = new AudioTrack.Builder().setAudioAttributes(attrs).setAudioFormat(fmt)
                    .setBufferSizeInBytes(bufSize).setTransferMode(AudioTrack.MODE_STREAM).build();
            } else {
                track = new AudioTrack(AudioManager.STREAM_ALARM, SAMPLE_RATE,
                    AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_16BIT, bufSize, AudioTrack.MODE_STREAM);
            }
            track.play(); audioTrack = track;
            short[] buf = new short[bufSize];
            double[] phases = new double[finalFreqs.length];
            long total = 0; int fade = SAMPLE_RATE;
            while (playing) {
                for (int i = 0; i < bufSize; i++) {
                    double s = 0;
                    for (int f = 0; f < finalFreqs.length; f++) {
                        s += Math.sin(2 * Math.PI * finalFreqs[f] * phases[f]);
                        phases[f] += 1.0 / SAMPLE_RATE;
                        if (phases[f] > 1.0) phases[f] -= 1.0;
                    }
                    s /= finalFreqs.length;
                    float env = total < fade ? (float) total / fade : 1.0f;
                    buf[i] = (short)(s * finalVol * env * Short.MAX_VALUE);
                    total++;
                }
                track.write(buf, 0, bufSize);
            }
            track.stop(); track.release(); audioTrack = null;
        });
        playThread.setDaemon(true); playThread.start();
        call.resolve(new JSObject().put("success", true));
    }

    @PluginMethod
    public void stopTones(PluginCall call) {
        stopAudio();
        call.resolve(new JSObject().put("success", true));
    }

    @PluginMethod
    public void getAlarmVolume(PluginCall call) {
        AudioManager am = (AudioManager) getContext().getSystemService(Context.AUDIO_SERVICE);
        int vol = am.getStreamVolume(AudioManager.STREAM_ALARM);
        int max = am.getStreamMaxVolume(AudioManager.STREAM_ALARM);
        call.resolve(new JSObject().put("volume", vol).put("maxVolume", max).put("ratio", max > 0 ? (float)vol/max : 0f));
    }

    private void stopAudio() {
        playing = false;
        if (playThread != null) { try { playThread.join(800); } catch (Exception ignored) {} playThread = null; }
        if (audioTrack != null) { try { audioTrack.stop(); audioTrack.release(); } catch (Exception ignored) {} audioTrack = null; }
    }

    @Override protected void handleOnDestroy() { stopAudio(); super.handleOnDestroy(); }
}
JAVA
echo "  ✓ AlarmAudioPlugin.java"

# ── 3. MainActivity.java ───────────────────────────
cat > "$JAVA_DIR/MainActivity.java" << 'MAIN'
package com.astrocurrents.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AlarmAudioPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
MAIN
echo "  ✓ MainActivity.java"

# ── 4. AndroidManifest.xml — add permissions ───────
MANIFEST="$ANDROID/app/src/main/AndroidManifest.xml"
if ! grep -q "MODIFY_AUDIO_SETTINGS" "$MANIFEST"; then
  sed -i '' 's|<uses-permission android:name="android.permission.VIBRATE" />|<uses-permission android:name="android.permission.VIBRATE" />\n    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />|' "$MANIFEST"
  echo "  ✓ AndroidManifest.xml (MODIFY_AUDIO_SETTINGS added)"
else
  echo "  ✓ AndroidManifest.xml (already has permission)"
fi

# ── 5. App name ─────────────────────────────────────
STRINGS="$ANDROID/app/src/main/res/values/strings.xml"
if [ -f "$STRINGS" ]; then
  sed -i '' 's|<string name="app_name">.*</string>|<string name="app_name">AstroAtlas</string>|' "$STRINGS"
  sed -i '' 's|<string name="title_activity_main">.*</string>|<string name="title_activity_main">AstroAtlas</string>|' "$STRINGS"
  echo "  ✓ App name: AstroAtlas"
fi

echo ""
echo "✅ Setup complete! Now:"
echo "   1. Open Android Studio: npx cap open android"
echo "   2. Wait for Gradle sync"
echo "   3. Build → Build APK(s)"
