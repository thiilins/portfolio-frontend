import { defaultTheme } from './defaults'
import { DefaultTheme } from 'styled-components'

export const light: DefaultTheme = {
  ...defaultTheme,
  title: 'light',
  display: {
    dark: 'none',
    light: 'block'
  },
  colors: {
    ...defaultTheme.colors,
    accent: '#ff5959',
    secondaryAccent: '#4158d0',
    primary: '#FF8A56',
    secondary: '#F0F2F5',
    primaryText: '#1c0826',
    secondaryText: '#38126D'
  }
}
