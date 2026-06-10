import type { CurrentWeather, DailyWeather, TempUnit } from '../types/weather'
import { getWMO, convertTemp, tempLabel, windDirection, uvColor, uvLabel } from '../utils/weather'

interface Props {
  current: CurrentWeather
  daily: DailyWeather
  unit: TempUnit
  locationName: string
  country: string
}

export default function CurrentWeatherCard({ current: C, daily, unit, locationName, country }: Props) {
  const wmo = getWMO(C.weather_code)
  const now = new Date()

  const rise = new Date(daily.sunrise[0])
  const set = new Date(daily.sunset[0])
  const totalMs = set.getTime() - rise.getTime()
  const elapsedMs = Math.max(0, Math.min(now.getTime() - rise.getTime(), totalMs))
  const sunPct = (elapsedMs / totalMs) * 100

  return (
    <div className="main-card">
      <div className="current-weather">
        <div className="location-info">
          <div className="city-name">{locationName}{country ? `, ${country}` : ''}</div>
          <div className="date-time">
            {now.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            {' · '}
            {now.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div style={{ marginTop: '8px' }}>
            <span className={`badge badge-${C.is_day ? 'amber' : 'blue'}`}>
              {C.is_day ? 'Daytime' : 'Nighttime'}
            </span>
            {C.uv_index >= 8 && (
              <span className="badge badge-red" style={{ marginLeft: '6px' }}>High UV</span>
            )}
          </div>
        </div>

        <div className="weather-main">
          <div className="weather-icon-3d">{wmo.icon}</div>
          <div className="temp-display">
            <div className="temp-big">
              {convertTemp(C.temperature_2m, unit)}
              <sup style={{ fontSize: '24px', verticalAlign: 'super' }}>{tempLabel(unit)}</sup>
            </div>
            <div className="weather-desc">{wmo.label}</div>
            <div className="temp-feels">
              Feels like {convertTemp(C.apparent_temperature, unit)}{tempLabel(unit)}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon">💧</div>
          <div className="stat-label">Humidity</div>
          <div className="stat-value" style={{ color: 'var(--accent-cyan)' }}>{C.relative_humidity_2m}%</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💨</div>
          <div className="stat-label">Wind</div>
          <div className="stat-value" style={{ color: 'var(--accent-blue)' }}>
            {Math.round(C.wind_speed_10m)} <span style={{ fontSize: '11px', fontWeight: 400 }}>mph</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🌡️</div>
          <div className="stat-label">Pressure</div>
          <div className="stat-value" style={{ color: 'var(--accent-purple)' }}>
            {Math.round(C.surface_pressure)} <span style={{ fontSize: '11px', fontWeight: 400 }}>hPa</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">☁️</div>
          <div className="stat-label">Cloud Cover</div>
          <div className="stat-value">{C.cloud_cover}%</div>
        </div>
      </div>

      {/* UV + Wind Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
        <div className="stat-card" style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>UV INDEX</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: uvColor(C.uv_index) }}>
              {C.uv_index?.toFixed(1)}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{uvLabel(C.uv_index)}</span>
          </div>
          <div style={{ position: 'relative', marginTop: '6px' }}>
            <div className="uv-bar"></div>
            <div className="uv-indicator" style={{ left: `${Math.min((C.uv_index / 12) * 100, 100)}%` }}></div>
          </div>
        </div>

        <div className="stat-card" style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>WIND</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="wind-compass" style={{ margin: 0, flexShrink: 0 }}>
              <div
                className="wind-needle"
                style={{
                  transform: `rotate(${C.wind_direction_10m}deg)`,
                  transformOrigin: 'bottom center',
                  position: 'absolute', top: '4px', left: '50%',
                  marginLeft: '-1px', height: '22px',
                }}
              />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                {windDirection(C.wind_direction_10m)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-blue)' }}>
                {Math.round(C.wind_speed_10m)} mph
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                Gusts: {Math.round(C.wind_gusts_10m)} mph
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sunrise/Sunset */}
      <div className="stat-card" style={{ marginTop: '10px' }}>
        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>🌅 SUNRISE / SUNSET</div>
        <div className="sun-timeline">
          <div className="sun-time">
            <span>🌅</span>
            <strong>{rise.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })}</strong>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Sunrise</span>
          </div>
          <div className="sun-arc" style={{ position: 'relative' }}>
            {sunPct > 0 && sunPct < 100 && (
              <div style={{ position: 'absolute', left: `${sunPct}%`, top: '-8px', transform: 'translateX(-50%)', fontSize: '16px' }}>
                ☀️
              </div>
            )}
          </div>
          <div className="sun-time">
            <span>🌇</span>
            <strong>{set.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })}</strong>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Sunset</span>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'center' }}>
          Daylight: {Math.floor(totalMs / 3600000)}h {Math.floor((totalMs % 3600000) / 60000)}m
        </div>
      </div>
    </div>
  )
}
