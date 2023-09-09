import React from 'react'
import { TopBarWrapper } from './styles'

import { DefaultImage } from '@components/DefaultImage'
import SocialIcons from '@components/SocialIcons'

export const TopBar: React.FC = () => {
  return (
    <TopBarWrapper>
      <SocialIcons />
    </TopBarWrapper>
  )
}
