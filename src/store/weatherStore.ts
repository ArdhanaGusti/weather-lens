import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { GeoLocation, TempUnit } from '../types/weather'

interface WeatherStore {
  unit: TempUnit
  setUnit: (unit: TempUnit) => void

  darkMode: boolean
  toggleDarkMode: () => void

  favorites: GeoLocation[]
  addFavorite: (loc: GeoLocation) => void
  removeFavorite: (loc: GeoLocation) => void
  isFavorite: (loc: GeoLocation) => boolean

  currentLocation: GeoLocation | null
  setCurrentLocation: (loc: GeoLocation) => void
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      unit: 'C',
      setUnit: (unit) => set({ unit }),

      darkMode: true,
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),

      favorites: [],
      addFavorite: (loc) =>
        set((s) => ({
          favorites: s.favorites.some(
            (f) => f.name === loc.name && f.country === loc.country
          )
            ? s.favorites
            : [...s.favorites, loc],
        })),
      removeFavorite: (loc) =>
        set((s) => ({
          favorites: s.favorites.filter(
            (f) => !(f.name === loc.name && f.country === loc.country)
          ),
        })),
      isFavorite: (loc) =>
        get().favorites.some(
          (f) => f.name === loc.name && f.country === loc.country
        ),

      currentLocation: null,
      setCurrentLocation: (loc) => set({ currentLocation: loc }),
    }),
    {
      name: 'weatherlens-store',
      partializer: (state) => ({
        unit: state.unit,
        darkMode: state.darkMode,
        favorites: state.favorites,
      }),
    }
  )
)
