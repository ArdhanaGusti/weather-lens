import type { DailyWeather, HourlyWeather, TempUnit } from '../types/weather'
import { getWMO, convertTemp, tempLabel, formatHour, getDayLabel } from '../utils/weather'

interface DailyProps {
  daily: DailyWeather
  unit: TempUnit
}

export function SevenDayForecast({ daily, unit }: DailyProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div className="section-title">7-Day Forecast</div>
      <div className="forecast-grid">
        {daily.time.slice(0, 7).map((d, i) => (
          <div key={i} className={`forecast-card${i === 0 ? ' today' : ''}`}>
            <div className="forecast-day">{getDayLabel(d, i)}</div>
            <div className="forecast-icon">{getWMO(daily.weather_code[i] ?? 0).icon}</div>
            <div className="forecast-high">{convertTemp(daily.temperature_2m_max[i] ?? 0, unit)}{tempLabel(unit)}</div>
            <div className="forecast-low">{convertTemp(daily.temperature_2m_min[i] ?? 0, unit)}{tempLabel(unit)}</div>
            {(daily.precipitation_probability_max[i] ?? 0) > 10 && (
              <div className="forecast-rain">💧{daily.precipitation_probability_max[i]}%</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

interface HourlyProps {
  hourly: HourlyWeather
  unit: TempUnit
  startIndex: number
}

export function HourlyForecast({ hourly, unit, startIndex }: HourlyProps) {
  const slots = Array.from({ length: 24 }, (_, i) => ({
    time: hourly.time[startIndex + i],
    temp: hourly.temperature_2m[startIndex + i],
    code: hourly.weather_code[startIndex + i],
    precip: hourly.precipitation_probability[startIndex + i],
  })).filter((s) => s.time)

  if (!slots.length) return null

  return (
    <div style={{ marginBottom: '16px' }}>
      <div className="section-title">Hourly Forecast</div>
      <div className="hourly-scroll">
        {slots.map((h, i) => (
          <div key={i} className="hourly-card">
            <div className="hourly-time">{i === 0 ? 'Now' : formatHour(new Date(h.time).getHours())}</div>
            <div className="hourly-icon">{getWMO(h.code ?? 0).icon}</div>
            <div className="hourly-temp">{convertTemp(h.temp ?? 0, unit)}{tempLabel(unit)}</div>
            {(h.precip ?? 0) > 0 && (
              <div style={{ fontSize: '10px', color: 'var(--accent-cyan)', marginTop: '2px' }}>{h.precip}%</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

interface PrecipProps {
  daily: DailyWeather
}

export function PrecipitationChart({ daily }: PrecipProps) {
  const maxVal = Math.max(...daily.precipitation_sum.slice(0, 5), 1)
  return (
    <div className="info-card">
      <div className="info-title">📊 Precipitation (mm)</div>
      {daily.time.slice(0, 5).map((d, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', width: '32px' }}>
            {getDayLabel(d, i).slice(0, 3)}
          </span>
          <div style={{ flex: 1, height: '6px', background: 'var(--bg-glass)', borderRadius: '3px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${(daily.precipitation_sum[i] / maxVal) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg,var(--accent-blue),var(--accent-cyan))',
                borderRadius: '3px',
                minWidth: daily.precipitation_sum[i] > 0 ? '4px' : '0',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
          <span style={{ fontSize: '11px', width: '40px', textAlign: 'right' }}>
            {daily.precipitation_sum[i]?.toFixed(1)} mm
          </span>
        </div>
      ))}
    </div>
  )
}
