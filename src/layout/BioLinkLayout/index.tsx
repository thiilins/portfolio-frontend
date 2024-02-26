'use client'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import themes from '@styles/themes'
import GlobalStyle from '@styles/global'
import { Content } from './Content'
interface IProps extends TChildProps {
  ssrCookieTheme: unknown
}
export default function BioLinkThemeWrapper({
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
      <Content>{children}</Content>
    </ThemeProvider>
  )
}
