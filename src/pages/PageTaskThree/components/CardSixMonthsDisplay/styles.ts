import styled from 'styled-components'

export const ContainerCardSixMonthsDisplay = styled.div`
  background: linear-gradient(90deg, #113817 0%, #121214 100%);
  width: 100%;
  min-width: 21rem;
  padding: 1rem 2rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > svg {
      color: ${(props) => props.theme['gray-100']};
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['green-300']};
      }

      &:hover {
        svg {
          transform: scale(1.3);
        }
      }
    }
  }

  p {
    margin-top: 0.875rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    font-family: 'Poppins', sans-serif;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
