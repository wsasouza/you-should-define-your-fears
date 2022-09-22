import styled from 'styled-components'

export const PageThreeContainer = styled.main`
  margin-bottom: 2rem;
  height: 200vh;
`

export const TaskThreeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#121214, #121214, #113817);
  padding: 2rem 4rem 8rem 4rem;

  h1 {
    display: flex;
    align-items: center;
    gap: 0.25rem;
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

export const CardDisplayContainer = styled.div`
  position: sticky;
  top: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -5.5rem auto;
  gap: 1rem;
`

export const CardItemContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const CardItemSixMonths = styled.div`
  grid-column: 1;
  display: grid;
  height: 2rem;
  gap: 0.875rem;
`

export const CardItemOneYear = styled.div`
  display: grid;
  height: 2rem;
  grid-column: 2;
  gap: 0.875rem;
`

export const CardItemThreeYears = styled.div`
  display: grid;
  grid-column: 3;
  height: 2rem;
  gap: 0.875rem;
`
