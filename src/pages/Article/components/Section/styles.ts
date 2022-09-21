import styled, { css } from 'styled-components'

interface SectionContainerProps {
  hasImage: boolean
}

export const SectionContainer = styled.div<SectionContainerProps>`
  margin: 1rem 0;
  display: grid;

  ${(props) =>
    props.hasImage
      ? css`
          grid-template-columns: 2fr 1fr;
          align-items: center;
        `
      : css`
          grid-template-columns: 1fr;
          width: 100%;
        `}

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  figure {
    text-align: center;
    font-weight: bold;
    font-size: 0.875rem;
  }
`

export const Text = styled.div`
  p {
    // font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.5;
    padding-right: 2rem;
    letter-spacing: 1px;
    line-height: 1.7;
    text-align: justify;
    font-size: 1.125rem;
  }
`
