import styled from 'styled-components'

export const PageTwoContainer = styled.main`
  margin-bottom: 2rem;
`

export const TaskDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#121214, #121214, #113817);
  padding: 2rem 4rem;

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
  }
`
