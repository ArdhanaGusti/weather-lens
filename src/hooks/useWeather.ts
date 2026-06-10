import { useQuery } from '@tanstack/react-query'
import { fetchWeather, searchLocations, reverseGeocode } from '../utils/api'
import type { GeoResult } from '../types/weather'

export function useWeatherQuery(lat: number | null, lon: number | null) {
  return useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => fetchWeather(lat!, lon!),
    enabled: lat !== null && lon !== null,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // refetch every 10 min
    retry: 2,
  })
}

export function useGeoSearch(query: string, enabled: boolean) {
  return useQuery<GeoResult[]>({
    queryKey: ['geo', query],
    queryFn: () => searchLocations(query),
    enabled: enabled && query.length >= 2,
    staleTime: 60 * 1000,
  })
}

export function useGeolocation() {
  return useQuery({
    queryKey: ['geolocation'],
    queryFn: async () => {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 8000,
        })
      )
      const { latitude: lat, longitude: lon } = pos.coords
      const result = await reverseGeocode(lat, lon)
      return {
        lat,
        lon,
        name: result?.name ?? 'Current Location',
        country: result?.country_code ?? '',
        country_code: result?.country_code ?? '',
      }
    },
    enabled: 'geolocation' in navigator,
    staleTime: Infinity,
    retry: 1,
  })
}
