import React from 'react'

import { Wrapper } from './styles'
export const Content: React.FC<TChildProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
