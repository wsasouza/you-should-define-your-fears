import styled from 'styled-components'

export const PageTwoContainer = styled.main`
  margin-bottom: 2rem;
  height: 200vh;
`

export const TaskDisplay = styled.div`
  position: sticky;
  top: 8rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  background: linear-gradient(#121214, #121214, #113817);
  padding: 2rem 0rem 2rem 0rem;

  span {
    padding: 1rem 4rem 0 4rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const TaskDisplayAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['gray-300']};
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
`

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 2rem 1rem;
`
