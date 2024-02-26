'use client'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    grid-area: CT;
    background: ${theme.colors.primary};
    background: linear-gradient(
      180deg,
      ${theme.colors.primary} 30%,
      ${theme.colors.secondary} 80%
    );
    color: ${theme.colors.primaryText};
    min-width: 100vw;
    min-height: 100vh;
    .content {
      z-index: ${theme.zIndex.base};
    }
  `}
`
