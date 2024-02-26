import React from 'react'

import { Container } from './styles'

const SkyParticles: React.FC = () => {
  return (
    <Container className="space">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </Container>
  )
}

export default SkyParticles
