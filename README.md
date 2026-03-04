# Chipsd

Eine kleine Letterboxd-inspirierte Bewertungsplattform für deutsche Chipssorten.

## Expo-Go App starten

1. Falls noch nicht vorhanden ein Expo-Projekt initialisieren/abhängigkeiten installieren:
   ```bash
   npm install
   npx expo start
   ```
2. QR-Code mit Expo Go scannen.

> Die mobile App liegt in `App.js` und nutzt die gemeinsame Datenquelle `chipsData.js`.

## Website lokal starten

Da `index.html` ES-Module lädt, bitte über einen kleinen lokalen Server starten:

```bash
python -m http.server 4173
```

Dann im Browser öffnen: `http://localhost:4173`.
