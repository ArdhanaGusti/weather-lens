// Weather condition code mappings
export interface WeatherCondition {
  label: string
  icon: string
  scene: SceneType
}

export type SceneType = 'sunny' | 'cloudy' | 'rainy' | 'storm' | 'snow' | 'fog'
export type TempUnit = 'C' | 'F' | 'K'

// Open-Meteo API response types
export interface CurrentWeather {
  time: string
  interval: number
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  is_day: number
  precipitation: number
  weather_code: number
  cloud_cover: number
  pressure_msl: number
  surface_pressure: number
  wind_speed_10m: number
  wind_direction_10m: number
  wind_gusts_10m: number
  uv_index: number
}

export interface HourlyWeather {
  time: string[]
  temperature_2m: number[]
  precipitation_probability: number[]
  weather_code: number[]
  wind_speed_10m: number[]
}

export interface DailyWeather {
  time: string[]
  weather_code: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  apparent_temperature_max: number[]
  sunrise: string[]
  sunset: string[]
  precipitation_sum: number[]
  precipitation_probability_max: number[]
  wind_speed_10m_max: number[]
  uv_index_max: number[]
}

export interface WeatherResponse {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: Record<string, string>
  current: CurrentWeather
  hourly_units: Record<string, string>
  hourly: HourlyWeather
  daily_units: Record<string, string>
  daily: DailyWeather
}

export interface GeoLocation {
  name: string
  country: string
  country_code: string
  lat: number
  lon: number
  admin1?: string
  admin2?: string
}

export interface GeoResult {
  id: number
  name: string
  latitude: number
  longitude: number
  country: string
  country_code: string
  admin1?: string
  admin2?: string
}

export interface HourlySlot {
  time: string
  temp: number
  code: number
  precip: number
}
