import styled from 'styled-components'

export const NavMobileContainer = styled.aside`
  width: 100%;
  background: rgba(15, 15, 15, 0.35);
  box-shadow: 0 8px 32px 0 rgba(196, 196, 204, 0.15);
  backdrop-filter: blur(13.5px);
  border: 1px solid rgba(10, 10, 10, 0.18);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 4rem;

  a {
    color: ${(props) => props.theme['green-300']};
    background: ${(props) => props.theme['gray-800']};
    border: 1px solid ${(props) => props.theme['green-300']};
    width: 100%;
    padding: 0.5rem 1rem;
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
    margin: 4rem 0;
    padding: 8px 16px;
    width: 100%;
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
