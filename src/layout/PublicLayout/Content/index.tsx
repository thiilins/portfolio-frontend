import React from 'react'

import { Wrapper } from './styles'
import SkyParticles from '@components/SkyParticles'
export const Content: React.FC<TChildProps> = ({ children }) => {
  return (
    <Wrapper>
      <SkyParticles />
      <div className="content"> {children}</div>
    </Wrapper>
  )
}
