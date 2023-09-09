import React from 'react'

import { Wrapper } from './styles'
import { Header } from './Header'
import { Content } from './Content'
import { Footer } from './Footer'

export const PublicLayout: React.FC<TChildProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}
