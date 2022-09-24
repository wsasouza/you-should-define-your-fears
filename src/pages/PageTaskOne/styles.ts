import styled from 'styled-components'

export const PageOneContainer = styled.main`
  margin-bottom: 2rem;
  height: 200vh;
`

export const TaskOneDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#121214, #121214, #113817);
  padding: 2rem 4rem 8rem 4rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['gray-300']};
  }
`
export const CardDisplayContainer = styled.div`
  position: sticky;
  top: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: -5.5rem auto;
  gap: 1rem;
  overflow-x: auto;
`

export const CardItemContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  overflow-x: auto;
`

export const CardItemDefine = styled.div`
  grid-column: 1;
  display: grid;
  min-height: 2rem;
  gap: 0.875rem;
`

export const CardItemPrevent = styled.div`
  display: grid;
  min-height: 2rem;
  grid-column: 2;
  gap: 0.875rem;
`

export const CardItemRepair = styled.div`
  display: grid;
  grid-column: 3;
  min-height: 2rem;
  gap: 0.875rem;
`
