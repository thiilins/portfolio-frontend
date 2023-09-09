'use client'
import styled, { css } from 'styled-components'

export const TopBarWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.secondary};
    display: flex;
    justify-content: end;
  `}
`
