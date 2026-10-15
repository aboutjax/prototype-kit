import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

const getTheme = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

export const setTheme = (theme: Theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem(STORAGE_KEY, theme)
}

/** Reads the active theme from the `.dark` class on <html> (set before paint in index.html). */
export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light' as const)
  return { theme, setTheme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
}
