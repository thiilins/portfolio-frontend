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
import { socialMedias } from '@constants/menus'
export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderMainWrapper>
        <LogoWrapper>
          <Logo className="header_logo" />
        </LogoWrapper>
        <MenuWrapper></MenuWrapper>
        <FeaturedWrapper>
          <SocialIcons {...socialMedias} />
          <ChangeThemeButton />
        </FeaturedWrapper>
      </HeaderMainWrapper>
    </HeaderWrapper>
  )
}
