import type { GeoResult, WeatherResponse } from '../types/weather'

const GEOCODE_BASE = 'https://geocoding-api.open-meteo.com/v1'
const WEATHER_BASE = 'https://api.open-meteo.com/v1'

export async function searchLocations(query: string): Promise<GeoResult[]> {
  const url = `${GEOCODE_BASE}/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Geocoding request failed')
  const data = await res.json()
  return data.results ?? []
}

export async function reverseGeocode(lat: number, lon: number): Promise<GeoResult | null> {
  const url = `${GEOCODE_BASE}/reverse?latitude=${lat}&longitude=${lon}&language=en`
  const res = await fetch(url)
  if (!res.ok) return null
  const data = await res.json()
  return data.results?.[0] ?? null
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherResponse> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'is_day',
      'precipitation',
      'weather_code',
      'cloud_cover',
      'pressure_msl',
      'surface_pressure',
      'wind_speed_10m',
      'wind_direction_10m',
      'wind_gusts_10m',
      'uv_index',
    ].join(','),
    hourly: [
      'temperature_2m',
      'precipitation_probability',
      'weather_code',
      'wind_speed_10m',
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'apparent_temperature_max',
      'sunrise',
      'sunset',
      'precipitation_sum',
      'precipitation_probability_max',
      'wind_speed_10m_max',
      'uv_index_max',
    ].join(','),
    forecast_days: '8',
    timezone: 'auto',
    wind_speed_unit: 'mph',
  })

  const res = await fetch(`${WEATHER_BASE}/forecast?${params}`)
  if (!res.ok) throw new Error('Weather request failed')
  return res.json()
}
