import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`

export const Content = styled(Dialog.Content)`
  width: 35rem;
  border-radius: 6px;
  padding: 2.5rem 3rem 4rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea {
      border-radius: 6px;
      border: none;
      resize: none;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-300']};
      }
    }

    button[type='submit'] {
      height: 3rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['green-700']};
      color: ${(props) => props.theme['pure-white']};
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background: ${(props) => props.theme['green-800']};
        transition: background-color 0.5s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border-radius: 50%;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  &:hover {
    color: ${(props) => props.theme['gray-300']};
  }
`
