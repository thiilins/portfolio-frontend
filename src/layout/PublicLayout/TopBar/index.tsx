import React from 'react'
import { TopBarWrapper } from './styles'

import SocialIcons from '@components/SocialIcons'
import socials from '@constants/socialLinks'
export const TopBar: React.FC = () => {
  return (
    <TopBarWrapper>
      <SocialIcons {...socials} />
    </TopBarWrapper>
  )
}
