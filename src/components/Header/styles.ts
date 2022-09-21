import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header<{ scroll: boolean }>`
  position: fixed;
  width: 100vw;
  z-index: 2;
  transition: 0.5s;

  ${(props) => props.scroll && scrollStyle};

  nav {
    display: flex;
    align-items: center;
    padding: 2rem 0;
    display: flex;
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
`

const scrollStyle = css`
  background: rgba(15, 15, 15, 0.35);
  box-shadow: 0 8px 32px 0 rgba(196, 196, 204, 0.15);
  backdrop-filter: blur(13.5px);
  border: 1px solid rgba(10, 10, 10, 0.18);
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    color: ${(props) => props.theme['green-300']};
    background: ${(props) => props.theme['gray-800']};
    border: 1px solid ${(props) => props.theme['green-300']};
    width: 8rem;
    padding: 4px 8px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      color: ${(props) => props.theme['gray-800']};
      background: ${(props) => props.theme['green-300']};
      font-weight: bold;

      svg {
        color: ${(props) => props.theme['green-800']};
        animation: icon 0.7s;
      }

      @keyframes icon {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1.3);
        }
      }
    }
  }

  a:last-child {
    margin-left: 1rem;
    padding: 8px 16px;
    width: 9rem;
    color: ${(props) => props.theme['green-800']};
    background: ${(props) => props.theme['green-300']};

    &:hover {
      background: ${(props) => props.theme['green-500']};
      box-shadow: 0 0 16px 4px rgba(196, 196, 204, 0.3);
      color: ${(props) => props.theme['green-800']};

      svg {
        color: ${(props) => props.theme['green-800']};
      }
    }
  }

  a.active {
    box-shadow: 0 0 16px 4px rgba(196, 196, 204, 0.3);

    span {
      display: none;
    }

    svg {
      transform: scale(1);
    }
  }

  a:last-child.active {
    box-shadow: 0 0 16px 4px rgba(196, 196, 204, 0.3);

    svg {
      transform: scale(1.2);
    }
  }
`
