'use client'
// For more details check the JS-Cookie Docs in https://github.com/js-cookie/js-cookie#readme
import { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'
import { useIsClient, useLocalStorage } from 'usehooks-ts'

export default function useThemeCookie(
  defaultTheme: string = 'dark'
): [ThemeTypes, TSetState<ThemeTypes>] {
  const cookieTheme = Cookies.get('theme')
  const isClient = useIsClient()
  const [, setLocalTheme] = useLocalStorage('theme', cookieTheme)
  const [theme, setTheme] = useState<ThemeTypes>(
    () => (cookieTheme as ThemeTypes) ?? defaultTheme
  )
  useEffect(() => {
    if (isClient && cookieTheme) {
      setLocalTheme(cookieTheme)
    }
  }, [cookieTheme, isClient, setLocalTheme])
  useEffect(() => {
    Cookies.set('theme', theme, {
      expires: !isNaN(Number(process.env.NEXT_PUBLIC_COOKIES_EXPIRES))
        ? Number(process.env.NEXT_PUBLIC_COOKIES_EXPIRES)
        : 365
    })
  }, [theme])

  return [theme, setTheme]
}
