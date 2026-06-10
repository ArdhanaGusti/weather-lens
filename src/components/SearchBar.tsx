import { useState, useRef, useCallback } from 'react'
import { useGeoSearch } from '../hooks/useWeather'
import type { GeoLocation, GeoResult } from '../types/weather'

interface Props {
  onSelect: (loc: GeoLocation) => void
  loading: boolean
}

export default function SearchBar({ onSelect, loading }: Props) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const { data: suggestions = [] } = useGeoSearch(debouncedQuery, showSuggestions)

  const handleChange = useCallback((value: string) => {
    setQuery(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (value.length >= 2) {
      debounceRef.current = setTimeout(() => {
        setDebouncedQuery(value)
        setShowSuggestions(true)
      }, 300)
    } else {
      setShowSuggestions(false)
    }
  }, [])

  const handleSelect = useCallback((result: GeoResult) => {
    const loc: GeoLocation = {
      name: result.name,
      country: result.country,
      country_code: result.country_code,
      lat: result.latitude,
      lon: result.longitude,
      admin1: result.admin1,
    }
    setQuery(result.name)
    setShowSuggestions(false)
    onSelect(loc)
  }, [onSelect])

  const handleSearch = useCallback(() => {
    if (suggestions.length > 0) handleSelect(suggestions[0])
  }, [suggestions, handleSelect])

  return (
    <div style={{ position: 'relative', marginBottom: '16px' }}>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search city, region or country…"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch()
            if (e.key === 'Escape') setShowSuggestions(false)
          }}
        />
        <button
          className="btn-search"
          onClick={handleSearch}
          disabled={loading || !query.trim()}
        >
          {loading ? '…' : 'Search'}
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((s, i) => (
            <div key={i} className="suggestion-item" onClick={() => handleSelect(s)}>
              <strong>{s.name}</strong>
              {s.admin1 ? ` · ${s.admin1}` : ''}
              {s.country ? ` · ${s.country}` : ''}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
