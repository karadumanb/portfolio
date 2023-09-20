import { useEffect, useState } from 'react'

const useThemeSwitcher = (skipSetting = true) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' ? localStorage.theme : ''
  )

  const otherTheme = theme === 'dark' ? 'light' : 'dark'

  const setAppTheme = () => {
    setTheme(otherTheme)
  }

  useEffect(() => {
    if (!skipSetting) {
      const root = window.document.documentElement

      root.classList.remove(otherTheme)
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, otherTheme])

  return [theme as 'light' | 'dark', setAppTheme]
}

export default useThemeSwitcher
