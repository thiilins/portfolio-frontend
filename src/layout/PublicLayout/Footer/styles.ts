'use client'
import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    background: linear-gradient(
      180deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 50%
    );
    padding: 30px 0px;
    color: ${theme.colors.primaryText};
    text-align: center;
    font-size: 1.9rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    .row,
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      list-style: none;
      gap: 1.5rem;
    }
    .row {
      width: 100%;
      padding: 0.6rem 0;
      a {
        color: ${theme.colors.primaryText};
        text-decoration: none;
        transition: 0.5s;
        &:hover {
          color: ${theme.colors.secondaryText};
        }
      }

      &.copyright {
        font-size: 1.2rem;
      }
    }
    svg.footer_logo {
      color: ${theme.colors.primaryText};
      width: 320px;
      height: auto;
    }
    @media (max-width: 720px) {
      height: auto;
      & .row ul {
        flex-wrap: wrap;
      }
    }
  `}
`
