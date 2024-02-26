'use client'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import themes from '@styles/themes'
import GlobalStyle from '@styles/global'
interface IProps extends TChildProps {
  ssrCookieTheme: unknown
}
export default function DefaultLayout({ children, ssrCookieTheme }: IProps) {
  const [theme] = useLocalStorage<ThemeTypes>(
    'theme',
    ssrCookieTheme as ThemeTypes
  )

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
