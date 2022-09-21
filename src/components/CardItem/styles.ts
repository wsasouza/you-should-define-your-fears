import styled from 'styled-components'

export const CardItemContainer = styled.div`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 1rem;
  min-width: 21rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Poppins' sans-serif;
      color: ${(props) => props.theme['green-300']};
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['gray-300']};
      }

      &:hover {
        svg {
          color: ${(props) => props.theme['red-300']};
          transform: scale(1.2);
        }
      }
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    color: ${(props) => props.theme['gray-400']};
  }
`
