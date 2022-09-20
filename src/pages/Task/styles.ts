import styled from 'styled-components'

export const TaskContainer = styled.main`
  width: 100%;
  margin: 10rem auto 0 auto;
  max-width: 70rem;
  padding: 2rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`
