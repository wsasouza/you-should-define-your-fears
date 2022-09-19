import styled from 'styled-components'

export const BioContainer = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  margin: 12rem auto 0 auto;
  max-width: 70rem;
  padding: 4rem 2rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  gap: 2rem;

  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Text = styled.div``
