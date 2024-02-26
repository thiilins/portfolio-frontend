'use client'
import styled, { css } from 'styled-components'
export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.sticky};
    min-width: 100%;
    display: grid;
    position: fixed;
    top: 0px;
    padding: 3rem;
    grid-template-columns: 1fr;
  `}
`
export const HeaderMainWrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    * {
      color: ${theme.colors.primary};
    }
    min-width: 100%;
    height: 100%;
    padding: 3rem;

    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1fr 5fr 0.5fr;

    & > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  `}
`
export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    justify-content: flex-start;
    .header_logo {
      width: auto;
      height: 72px;
      padding: 0;
      color: ${theme.colors.white};
    }
  `}
`
export const MenuWrapper = styled.div`
  ${({ theme }) => css``}
`
export const FeaturedWrapper = styled.div`
  ${({ theme }) => css``}
`
