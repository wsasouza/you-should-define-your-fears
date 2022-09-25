import styled from 'styled-components'

export const Page404Container = styled.main`
  margin: 10rem auto 0 auto;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  width: 100%;
  padding: 4rem 0;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    img {
      width: 60%;
      height: 100%;
      object-fit: cover;
    }
  }
`
