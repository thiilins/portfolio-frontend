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
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);

    * {
      color: ${theme.colors.white};
    }
    min-width: 100%;
    height: 100%;
    padding: 1rem 3rem;

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
