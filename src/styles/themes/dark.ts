import { defaultTheme } from './defaults'
import { DefaultTheme } from 'styled-components'

export const dark: DefaultTheme = {
  ...defaultTheme,
  title: 'dark',
  colors: {
    ...defaultTheme.colors,
    accent: '#ff5959',
    secondaryAccent: '#4158d0',
    primary: '#1c0826',
    secondary: '#38126D',
    primaryText: '#F0F2F5',
    secondaryText: '#FF8A56'
  }
}
