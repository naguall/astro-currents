#!/bin/bash
# AstroAtlas — Update APK in one command
# Usage: bash update-apk.sh
# Run this every time there are code changes to deploy to the phone

set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "🌙 AstroAtlas — Building update..."
echo ""

# Step 1: Sync www/ to Android project
echo "📦 Syncing web assets..."
npx cap sync android --inline
echo "  ✓ Synced"

# Step 2: Build APK
echo "🔨 Building APK..."
cd android
./gradlew assembleDebug --quiet
cd "$ROOT"

# Step 3: Show result
APK="$ROOT/android/app/build/outputs/apk/debug/app-debug.apk"
SIZE=$(du -sh "$APK" | cut -f1)
echo ""
echo "✅ APK ready! ($SIZE)"
echo "   $APK"
echo ""

# Step 4: Open folder in Finder
open "$(dirname "$APK")"
echo "📂 Finder opened — send app-debug.apk to your phone"
echo ""
echo "Done! Install on phone → replace existing app → data preserved ✓"
