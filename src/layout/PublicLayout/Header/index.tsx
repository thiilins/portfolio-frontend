import React from 'react'

import {
  HeaderWrapper,
  HeaderMainWrapper,
  FeaturedWrapper,
  LogoWrapper,
  MenuWrapper
} from './styles'
import ChangeThemeButton from '@components/ChangeThemeButton'
import Logo from '@shared/svg/Logo'
import SocialIcons from '@components/SocialIcons'
import socials from '@constants/socialLinks'
export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderMainWrapper>
        <LogoWrapper>
          <Logo className="header_logo" />
        </LogoWrapper>
        <MenuWrapper></MenuWrapper>
        <FeaturedWrapper>
          <SocialIcons {...socials} />
          <ChangeThemeButton />
        </FeaturedWrapper>
      </HeaderMainWrapper>
    </HeaderWrapper>
  )
}
