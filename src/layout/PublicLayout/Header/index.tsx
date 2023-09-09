import React from 'react'

import {
  HeaderWrapper,
  HeaderMainWrapper,
  FeaturedWrapper,
  LogoWrapper,
  MenuWrapper
} from './styles'
import ChangeThemeButton from '@components/ChangeThemeButton'
import { TopBar } from '../TopBar'
import Logo from '@shared/svg/Logo'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <HeaderMainWrapper>
        <LogoWrapper>
          <Logo className="header_logo" />
        </LogoWrapper>
        <MenuWrapper></MenuWrapper>
        <FeaturedWrapper>
          <ChangeThemeButton />
        </FeaturedWrapper>
      </HeaderMainWrapper>
    </HeaderWrapper>
  )
}
