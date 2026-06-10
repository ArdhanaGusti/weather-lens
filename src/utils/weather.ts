import type { WeatherCondition, TempUnit } from '../types/weather'

export const WMO_CODES: Record<number, WeatherCondition> = {
  0:  { label: 'Clear Sky',            icon: '☀️',  scene: 'sunny'  },
  1:  { label: 'Mainly Clear',         icon: '🌤️', scene: 'sunny'  },
  2:  { label: 'Partly Cloudy',        icon: '⛅',  scene: 'cloudy' },
  3:  { label: 'Overcast',             icon: '☁️',  scene: 'cloudy' },
  45: { label: 'Foggy',                icon: '🌫️', scene: 'fog'    },
  48: { label: 'Icy Fog',              icon: '🌫️', scene: 'fog'    },
  51: { label: 'Light Drizzle',        icon: '🌦️', scene: 'rainy'  },
  53: { label: 'Drizzle',              icon: '🌦️', scene: 'rainy'  },
  55: { label: 'Heavy Drizzle',        icon: '🌧️', scene: 'rainy'  },
  61: { label: 'Light Rain',           icon: '🌧️', scene: 'rainy'  },
  63: { label: 'Rain',                 icon: '🌧️', scene: 'rainy'  },
  65: { label: 'Heavy Rain',           icon: '🌧️', scene: 'rainy'  },
  71: { label: 'Light Snow',           icon: '🌨️', scene: 'snow'   },
  73: { label: 'Snow',                 icon: '❄️',  scene: 'snow'   },
  75: { label: 'Heavy Snow',           icon: '❄️',  scene: 'snow'   },
  77: { label: 'Snow Grains',          icon: '🌨️', scene: 'snow'   },
  80: { label: 'Light Showers',        icon: '🌦️', scene: 'rainy'  },
  81: { label: 'Showers',              icon: '🌧️', scene: 'rainy'  },
  82: { label: 'Heavy Showers',        icon: '⛈️',  scene: 'storm'  },
  85: { label: 'Snow Showers',         icon: '🌨️', scene: 'snow'   },
  86: { label: 'Heavy Snow Showers',   icon: '🌨️', scene: 'snow'   },
  95: { label: 'Thunderstorm',         icon: '⛈️',  scene: 'storm'  },
  96: { label: 'Thunderstorm + Hail',  icon: '⛈️',  scene: 'storm'  },
  99: { label: 'Heavy Thunderstorm',   icon: '⛈️',  scene: 'storm'  },
}

export function getWMO(code: number): WeatherCondition {
  return WMO_CODES[code] ?? { label: 'Unknown', icon: '🌡️', scene: 'sunny' }
}

export function convertTemp(celsius: number, unit: TempUnit): number {
  if (unit === 'F') return Math.round(celsius * 9 / 5 + 32)
  if (unit === 'K') return Math.round(celsius + 273.15)
  return Math.round(celsius)
}

export function tempLabel(unit: TempUnit): string {
  if (unit === 'F') return '°F'
  if (unit === 'K') return 'K'
  return '°C'
}

export function formatHour(h: number): string {
  if (h === 0) return '12am'
  if (h < 12) return `${h}am`
  if (h === 12) return '12pm'
  return `${h - 12}pm`
}

export function getDayLabel(dateStr: string, index: number): string {
  if (index === 0) return 'Today'
  if (index === 1) return 'Tomorrow'
  return new Date(dateStr).toLocaleDateString('en', { weekday: 'short' })
}

export function windDirection(deg: number): string {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(deg / 45) % 8]
}

export function uvColor(uv: number): string {
  if (uv <= 2) return '#4ade80'
  if (uv <= 5) return '#fbbf24'
  if (uv <= 7) return '#fb923c'
  if (uv <= 10) return '#f87171'
  return '#dc2626'
}

export function uvLabel(uv: number): string {
  if (uv <= 2) return 'Low'
  if (uv <= 5) return 'Moderate'
  if (uv <= 7) return 'High'
  if (uv <= 10) return 'Very High'
  return 'Extreme'
}
