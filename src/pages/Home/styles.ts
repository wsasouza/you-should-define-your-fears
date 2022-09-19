import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 12rem auto 0 auto;
  max-width: 70rem;
  padding: 4rem 2rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  gap: 2rem;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-100']};
    letter-spacing: 2px;
    line-height: 1.3;

    &::after {
      content: '.';
      display: inline-block;
      font-size: 4rem;
      line-height: 0.5rem;
      margin-left: 2px;
      color: ${(props) => props.theme['green-300']};
    }
  }

  a {
    margin-top: 1.4rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['pure-white']};

    &::before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 1.1rem;
      margin-right: 8px;
      background: ${(props) => props.theme['green-300']};
      transition: width 0.3s;
    }

    &:hover {
      color: ${(props) => props.theme['green-300']};
    }

    &:hover::before {
      width: 1.5rem;
    }
  }
`
