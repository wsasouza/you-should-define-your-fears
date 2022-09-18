import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header<{ scroll: boolean }>`
  position: fixed;
  width: 100vw;
  z-index: 2;
  transition: 0.5s;

  ${(props) => props.scroll && scrollStyle};

  nav {
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
    display: flex;
    max-width: 70rem;
    margin: 0 auto;
    justify-content: space-between;
  }
`

const scrollStyle = css`
  background: rgba(15, 15, 15, 0.35);
  box-shadow: 0 8px 32px 0 rgba(196, 196, 204, 0.15);
  backdrop-filter: blur(13.5px);
  border: 1px solid rgba(10, 10, 10, 0.18);
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    color: ${(props) => props.theme['green-300']};
    background: ${(props) => props.theme['gray-800']};
    border: 1px solid ${(props) => props.theme['green-300']};
    width: 8rem;
    padding: 4px 8px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    &:hover {
      color: ${(props) => props.theme['gray-800']};
      background: ${(props) => props.theme['green-300']};
      transition: 0.3s;
    }
  }

  a:last-child {
    margin-left: 1rem;
    padding: 8px 16px;
    color: ${(props) => props.theme['green-700']};
    background: ${(props) => props.theme['green-300']};

    &:hover {
      background: ${(props) => props.theme['green-100']};
      transition: 0.3s;
    }
  }
`
