'use client'
// import { useLocalStorage } from 'usehooks-ts'
import { Wrapper } from './styles'
import useThemeCookie from '@/shared/hooks/useThemeCookie'
import { useLocalStorage } from 'usehooks-ts'
import useBrowser from '@shared/hooks/useBrowser'
const ChangeThemeButton = () => {
  const isClient = useBrowser()
  const [cookieTheme, setCookieTheme] = useThemeCookie()
  const [theme, setTheme] = useLocalStorage('theme', cookieTheme)
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setCookieTheme(newTheme)
    return setTheme(newTheme)
  }

  return (
    <Wrapper $loaded={isClient}>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme !== 'light'}
          onChange={() => changeTheme()}
        />
        <span className="slider"></span>
      </label>
    </Wrapper>
  )
}

export default ChangeThemeButton
