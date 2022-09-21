import styled from 'styled-components'

export const BioContainer = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  margin: 10rem auto 0 auto;
  max-width: 70rem;
  padding: 4rem 2rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  gap: 3rem;

  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Text = styled.div`
  padding: 0 3rem 0 0;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['pure-white']};

    &::after {
      content: '.';
      display: inline-block;
      font-size: 4rem;
      line-height: 0.5rem;
      margin-left: 2px;
      color: ${(props) => props.theme['green-300']};
    }
  }

  span {
    font-size: 1.125rem;
    display: block;
    margin-top: 0.2rem;
    color: ${(props) => props.theme['gray-100']};

    &::before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.8rem;
      margin-right: 4px;
      background: ${(props) => props.theme['green-300']};
    }
  }

  p {
    text-align: justify;
    margin-top: 3rem;
    line-height: 1.7;
    letter-spacing: 1px;

    a {
      color: ${(props) => props.theme['green-300']};
      font-weight: bold;
      margin-left: 4px;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        height: 2px;
        width: 0;
        background: ${(props) => props.theme['green-300']};
        transition: 0.3s;
        position: absolute;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`
