'use client'
import styled, { css } from 'styled-components'

export const SocialLinksWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 25px;
    gap: 1rem;
    svg {
      cursor: pointer;
      width: 25px;
      height: auto;
      color: ${theme.colors.primaryText};
      &:hover {
        color: ${theme.colors.secondaryText};
      }
    }
  `}
`
