'use client'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ $loaded?: boolean }>`
  ${({ theme, $loaded = false }) => css`
    /* The switch - the box around the slider */
    .switch {
      display: block;
      --width-of-switch: 7em;
      --height-of-switch: 4em;
      /* size of sliding icon -- sun and moon */
      --size-of-icon: 2.8em;
      /* it is like a inline-padding of switch */
      --slider-offset: 0.3em;
      position: relative;
      width: var(--width-of-switch);
      height: var(--height-of-switch);
      max-width: var(--width-of-switch);
      max-height: var(--height-of-switch);
      overflow: hidden;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f4f4f5;
      transition: 0.4s;
      border-radius: 30px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: var(--size-of-icon, 1.4em);
      width: var(--size-of-icon, 1.4em);
      border-radius: 20px;
      left: var(--slider-offset, 0.3em);
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #303136;
    }

    input:checked + .slider:before {
      left: calc(
        100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em))
      );
      background: #303136;
      /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
      box-shadow:
        inset -3px -2px 5px -2px #8983f7,
        inset -10px -4px 0 0 #a3dafb;
    }

    ${!$loaded &&
    css`
      .switch {
        transform: translateX(-100%);
        background-color: ${theme.colors.white};
        background: linear-gradient(
          110deg,
          rgba(227, 227, 227, 0) 0%,
          rgba(227, 227, 227, 0) 40%,
          rgba(227, 227, 227, 0.5) 50%,
          rgba(227, 227, 227, 0) 60%,
          rgba(227, 227, 227, 0) 100%
        );
        animation: gradient-animation_2 1.2s linear infinite;
        & * {
          display: none;
        }
      }
      @keyframes gradient-animation_2 {
        0% {
          transform: translateX(0%);
        }

        100% {
          transform: translateX(100%);
        }
      }
    `}/*  */
  `}
`
