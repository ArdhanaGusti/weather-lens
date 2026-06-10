# ⛅ WeatherLens

A beautiful, production-ready weather forecast app with 3D atmospheric animations.

## Features

- 🌍 **Real-time weather** via Open-Meteo API (free, no API key required)
- 📍 **Geolocation** – auto-detects your location on first load
- 🔍 **Search with autocomplete** – find any city worldwide
- 📅 **7-day forecast** with daily high/low, precipitation probability
- 🕐 **24-hour hourly forecast** with scrollable timeline
- 🌡️ **Temperature units** – toggle between °C, °F, and Kelvin
- ⭐ **Favorite locations** – save and quick-switch between cities
- 🌙 **Dark/Light mode** – persisted across sessions
- 🎮 **3D weather scenes** (Three.js) – Sunny, Cloudy, Rainy, Storm, Snow, Fog

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS | Utility styling |
| Zustand | Global state (unit, favorites, dark mode) |
| TanStack Query | Data fetching & caching |
| Three.js | 3D weather animations |
| Framer Motion | (ready to use for transitions) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── WeatherScene.tsx     # Three.js 3D atmosphere
│   ├── SearchBar.tsx        # Search with autocomplete
│   ├── CurrentWeatherCard.tsx
│   └── Forecast.tsx         # 7-day + hourly + charts
├── hooks/
│   └── useWeather.ts        # TanStack Query hooks
├── store/
│   └── weatherStore.ts      # Zustand store
├── types/
│   └── weather.ts           # TypeScript interfaces
├── utils/
│   ├── api.ts               # Open-Meteo API calls
│   └── weather.ts           # Helpers & WMO code map
├── App.tsx
├── main.tsx
└── index.css
```

## APIs Used

- **Weather**: https://api.open-meteo.com/v1/forecast
- **Geocoding**: https://geocoding-api.open-meteo.com/v1/search
- **Reverse geocoding**: https://geocoding-api.open-meteo.com/v1/reverse

All free, no API key required.

## Deployment

Works with any static host (Vercel, Netlify, GitHub Pages):

```bash
npm run build
# Deploy the `dist/` folder
```
