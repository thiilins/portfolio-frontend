'use client'
import styled, { css } from 'styled-components'
export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primaryText};
    min-width: 100%;
    display: grid;
    position: sticky;
    top: 0px;
    grid-template-columns: 1fr;
    grid-template-rows: 32px 72px;
  `}
`
export const HeaderMainWrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primaryText};
    min-width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 0.5fr;

    & > * {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`
export const LogoWrapper = styled.main`
  ${({ theme }) => css``}
`
export const MenuWrapper = styled.main`
  ${({ theme }) => css``}
`
export const FeaturedWrapper = styled.main`
  ${({ theme }) => css``}
`
