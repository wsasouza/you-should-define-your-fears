import styled from 'styled-components'

export const ArticleContainer = styled.main`
  width: 100%;
  margin: 10rem auto 3rem auto;
  max-width: 72rem;
  padding: 0 0 2rem 0;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #113817 0%, #121214 100%);
  padding: 2rem 3rem;
  border-radius: 6px;

  h1 {
    color: ${(props) => props.theme['pure-white']};
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    padding: 0 3rem;

    &::after {
      content: '.';
      display: inline-block;
      font-size: 4rem;
      line-height: 0.5rem;
      margin-left: 2px;
      color: ${(props) => props.theme['green-300']};
    }
  }

  p {
    margin-top: 2rem;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-300']};
    letter-spacing: 1px;

    strong: {
      color: ${(props) => props.theme['gray-100']};
    }

    &::before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.8rem;
      margin-right: 8px;
      background: ${(props) => props.theme['green-300']};
    }
  }

  @media (max-width: 940px) {
    padding: 2rem 1.5rem;

    h1 {
      font-size: 2.5rem;
      padding: 0 1rem;
    }
  }
`

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 2rem;

  @media (max-width: 940px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;

  img {
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme['green-700']};
  }

  span {
    color: ${(props) => props.theme['pure-white']};
  }
`

export const DateEvent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['pure-white']};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;

  @media (max-width: 940px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`
