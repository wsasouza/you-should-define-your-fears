import styled from 'styled-components'

export const TaskContainer = styled.main`
  width: 100%;
  margin: 10rem auto 0 auto;
  max-width: 70rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #113817 0%, #121214 100%);
    padding: 1rem 0;
    border-radius: 6px 6px 0 0;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      width: 8rem;
      padding: 4px 8px;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-800']};

      span {
        color: ${(props) => props.theme['gray-300']};
      }

      svg {
        color: ${(props) => props.theme['gray-300']};
      }

      &:hover {
        background: ${(props) => props.theme['gray-900']};
        transition: 0.3s;

        span {
          color: ${(props) => props.theme['pure-white']};
        }

        svg {
          color: ${(props) => props.theme['green-300']};
          transform: scale(1);
          animation: icon 0.7s;
        }

        .active {
          svg {
            color: ${(props) => props.theme['green-300']};
          }
        }
      }

      @keyframes icon {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }

    a.active {
      border: 1px solid ${(props) => props.theme['gray-300']};

      span {
        color: ${(props) => props.theme['green-300']};
      }

      svg {
        color: ${(props) => props.theme['green-300']};
        transform: scale(1.1);
      }
    }
  }
`
