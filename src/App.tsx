import { useEffect, useMemo } from 'react'
import { useWeatherStore } from './store/weatherStore'
import { useWeatherQuery, useGeolocation } from './hooks/useWeather'
import { getWMO } from './utils/weather'
import WeatherScene from './components/WeatherScene'
import SearchBar from './components/SearchBar'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import { SevenDayForecast, HourlyForecast, PrecipitationChart } from './components/Forecast'
import type { GeoLocation } from './types/weather'

export default function App() {
  const {
    unit, setUnit,
    darkMode, toggleDarkMode,
    favorites, addFavorite, removeFavorite, isFavorite,
    currentLocation, setCurrentLocation,
  } = useWeatherStore()

  const { data: geoData } = useGeolocation()

  const { data: weather, isLoading, isError, error } = useWeatherQuery(
    currentLocation?.lat ?? null,
    currentLocation?.lon ?? null
  )

  // Apply theme class
  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !darkMode)
  }, [darkMode])

  // Auto-set location from geolocation on first load
  useEffect(() => {
    if (!currentLocation && geoData) {
      setCurrentLocation(geoData)
    } else if (!currentLocation && !geoData) {
      setCurrentLocation({ name: 'London', country: 'United Kingdom', country_code: 'GB', lat: 51.5074, lon: -0.1278 })
    }
  }, [geoData, currentLocation, setCurrentLocation])

  const scene = useMemo(() => {
    if (!weather) return 'sunny' as const
    return getWMO(weather.current.weather_code).scene
  }, [weather])

  const currentHourIdx = useMemo(() => {
    if (!weather?.hourly) return 0
    const now = new Date()
    const idx = weather.hourly.time.findIndex(
      (t) => new Date(t).getHours() === now.getHours() && new Date(t).toDateString() === now.toDateString()
    )
    return Math.max(0, idx)
  }, [weather])

  function handleLocationSelect(loc: GeoLocation) {
    setCurrentLocation(loc)
  }

  function handleToggleFavorite() {
    if (!currentLocation) return
    isFavorite(currentLocation) ? removeFavorite(currentLocation) : addFavorite(currentLocation)
  }

  return (
    <>
      <WeatherScene scene={scene} />

      <div className="app">
        {/* Header */}
        <div className="header">
          <div className="logo">⛅ WeatherLens</div>
          <div className="header-right">
            <div className="unit-toggle">
              {(['C', 'F', 'K'] as const).map((u) => (
                <button key={u} className={`unit-btn${unit === u ? ' active' : ''}`} onClick={() => setUnit(u)}>
                  °{u}
                </button>
              ))}
            </div>
            <button className="btn-icon" onClick={toggleDarkMode} title="Toggle theme">
              {darkMode ? '☀️' : '🌙'}
            </button>
            {currentLocation && (
              <button className="btn-icon" onClick={handleToggleFavorite} title={isFavorite(currentLocation) ? 'Remove favorite' : 'Add to favorites'}>
                {isFavorite(currentLocation) ? '★' : '☆'}
              </button>
            )}
          </div>
        </div>

        {/* Search */}
        <SearchBar onSelect={handleLocationSelect} loading={isLoading} />

        {/* Favorites */}
        {favorites.length > 0 && (
          <div className="favorites-row">
            {favorites.map((f, i) => (
              <div key={i} className="fav-chip" onClick={() => handleLocationSelect(f)}>
                <span>📍 {f.name}{f.country ? `, ${f.country_code}` : ''}</span>
                <span
                  className="remove"
                  onClick={(e) => { e.stopPropagation(); removeFavorite(f) }}
                >×</span>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="error-card">
            <p style={{ color: 'var(--accent-red)', fontSize: '14px' }}>
              ⚠️ {error instanceof Error ? error.message : 'Failed to fetch weather. Please try again.'}
            </p>
          </div>
        )}

        {/* Loading */}
        {isLoading && !weather && (
          <div className="loading-card">
            <div className="spinner" />
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Fetching weather data…</p>
          </div>
        )}

        {/* Weather Content */}
        {weather && currentLocation && (
          <>
            <CurrentWeatherCard
              current={weather.current}
              daily={weather.daily}
              unit={unit}
              locationName={currentLocation.name}
              country={currentLocation.country_code}
            />

            <HourlyForecast hourly={weather.hourly} unit={unit} startIndex={currentHourIdx} />

            <SevenDayForecast daily={weather.daily} unit={unit} />

            <div className="info-grid">
              <PrecipitationChart daily={weather.daily} />
              <div className="info-card">
                <div className="info-title">📈 Max UV This Week</div>
                {weather.daily.time.slice(0, 5).map((d, i) => {
                  const uv = weather.daily.uv_index_max[i] ?? 0
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)', width: '32px' }}>
                        {new Date(d).toLocaleDateString('en', { weekday: 'short' })}
                      </span>
                      <div style={{ flex: 1, height: '6px', background: 'var(--bg-glass)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${(uv / 12) * 100}%`, height: '100%', background: 'linear-gradient(90deg,#22d3ee,#fbbf24,#f87171)', borderRadius: '3px', minWidth: '2px' }} />
                      </div>
                      <span style={{ fontSize: '11px', width: '24px', textAlign: 'right' }}>{uv.toFixed(1)}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: '8px 0 24px', fontSize: '11px', color: 'var(--text-secondary)' }}>
              Data from Open-Meteo · Updated {new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </>
        )}

        {/* Empty state */}
        {!weather && !isLoading && !isError && (
          <div className="loading-card">
            <div className="pulse" style={{ fontSize: '48px', marginBottom: '12px' }}>🌍</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Search for a city to see weather data</p>
          </div>
        )}
      </div>
    </>
  )
}
