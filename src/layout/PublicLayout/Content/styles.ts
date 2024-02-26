'use client'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    grid-area: CT;
    background: ${theme.colors.primary};
    background: linear-gradient(
      180deg,
      ${theme.colors.primary} 2%,
      ${theme.colors.secondary} 50%
    );
    color: ${theme.colors.primaryText};
    min-width: 100%;
    min-height: 100%;
    .content {
      z-index: ${theme.zIndex.base};
    }
  `}
`
