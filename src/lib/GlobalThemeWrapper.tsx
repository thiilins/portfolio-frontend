'use client'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import themes from '@styles/themes'
import GlobalStyle from '@styles/global'
import cookie from 'cookie'
import useThemeCookie from '@/shared/hooks/useThemeCookie'
import { GetServerSideProps } from 'next'
import { PublicLayout } from '@layout/PublicLayout'
interface IProps extends TChildProps {
  ssrCookieTheme: unknown
}
export default function GlobalThemeWrapper({
  children,
  ssrCookieTheme
}: IProps) {
  const [theme] = useLocalStorage<ThemeTypes>(
    'theme',
    ssrCookieTheme as ThemeTypes
  )

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <PublicLayout>{children}</PublicLayout>
    </ThemeProvider>
  )
}
