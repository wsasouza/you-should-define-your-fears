import styled from 'styled-components'

export const PageThreeContainer = styled.main`
  margin-bottom: 2rem;
`

export const TaskThreeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#121214, #121214, #113817);
  padding: 2rem 4rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['gray-300']};
  }

  span {
    margin-top: 1rem;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['gray-400']};
    font-size: 1.5rem;
  }
`
