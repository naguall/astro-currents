# Moon Tracker — Migración a Capacitor

## Archivos incluidos
- `index.html` / `www/index.html` — App principal
- `lunar-data.js` / `www/lunar-data.js` — Datos lunares 2026
- `capacitor.config.json` — Configuración Capacitor
- `package.json` — Dependencias Node.js
- `manifest.json` — PWA manifest
- `icons/` — Todos los íconos (iOS, Android, Web)

## Pasos para migrar a Capacitor

### 1. Instalar dependencias
```bash
npm install
```

### 2. Inicializar Capacitor (si es proyecto nuevo)
```bash
npx cap init "Moon Tracker" "com.moontracker.app" --web-dir www
```

### 3. Agregar plataformas
```bash
npx cap add ios
npx cap add android
```

### 4. Copiar archivos web
```bash
npx cap sync
```

### 5. Abrir en Xcode / Android Studio
```bash
npx cap open ios      # Xcode
npx cap open android  # Android Studio
```

## Íconos iOS (Xcode)
Arrastrar `icons/ios_*.png` a `Assets.xcassets → AppIcon`
Tamaños clave: 60x60, 120x120, 180x180, 1024x1024

## Íconos Android
Copiar contenido de `icons/android_*/` a `app/src/main/res/`

## Plugins Capacitor recomendados
- `@capacitor/geolocation` → GPS ubicación usuario
- `@capacitor/local-notifications` → Recordatorios lunares
- `@capacitor/status-bar` → Barra de estado oscura
- `@capacitor/splash-screen` → Pantalla de carga

## APIs externas en uso
- Open-Meteo Marine API (mareas, gratuita, sin key)
- GPS del dispositivo via navigator.geolocation

## Notas técnicas
- App es 100% HTML/JS/CSS en un solo archivo
- No requiere servidor backend
- LocalStorage para persistencia de datos
- Compatible con iOS 13+ y Android 5+
