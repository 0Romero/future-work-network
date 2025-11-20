import { useEffect } from 'react'

export function useDarkMode() {
  const toggleDarkMode = () => {
    const root = window.document.documentElement
    const isDark = root.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const root = window.document.documentElement

    if (stored === 'dark' || (!stored && prefersDark)) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [])

  return { toggleDarkMode }
}

export function DarkModeToggle({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center gap-1 rounded-full border border-slate-300 dark:border-slate-500 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      <span className="hidden sm:inline">Alternar tema</span>
      <span className="sm:hidden">Tema</span>
      <span aria-hidden="true">🌓</span>
    </button>
  )
}
