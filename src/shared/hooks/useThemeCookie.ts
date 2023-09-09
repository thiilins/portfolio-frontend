'use client'
// For more details check the JS-Cookie Docs in https://github.com/js-cookie/js-cookie#readme
import { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'

export default function useThemeCookie(
  defaultTheme: string = 'dark'
): [ThemeTypes, TSetState<ThemeTypes>] {
  const [theme, setTheme] = useState<ThemeTypes>(
    () => (Cookies.get('theme') as ThemeTypes) ?? defaultTheme
  )

  useEffect(() => {
    Cookies.set('theme', theme, {
      expires: !isNaN(Number(process.env.NEXT_PUBLIC_COOKIES_EXPIRES))
        ? Number(process.env.NEXT_PUBLIC_COOKIES_EXPIRES)
        : 365
    })
  }, [theme])

  return [theme, setTheme]
}
