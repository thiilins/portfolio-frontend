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

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <HeaderMainWrapper>
        <LogoWrapper></LogoWrapper>
        <MenuWrapper></MenuWrapper>
        <FeaturedWrapper>
          <ChangeThemeButton />
        </FeaturedWrapper>
      </HeaderMainWrapper>
    </HeaderWrapper>
  )
}
