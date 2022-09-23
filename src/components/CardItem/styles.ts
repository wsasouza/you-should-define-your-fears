import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const CardItemContainer = styled.div`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 1rem;
  min-width: 21rem;

  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 16px 4px rgba(196, 196, 204, 0.3);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Poppins' sans-serif;
      color: ${(props) => props.theme['green-300']};
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['gray-300']};
      }

      &:hover {
        svg {
          color: ${(props) => props.theme['red-300']};
          transform: scale(1.2);
        }
      }
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const DialogContent = styled(Dialog.Content)`
  width: 22rem;
  border-radius: 6px;
  padding: 1.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const DialogDescription = styled(Dialog.Description)`
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-400']};
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  &:hover {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const DialogAction = styled.div`
  margin: 1.5rem 0 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CancelButton = styled(Dialog.Close)`
  border: 0;
  padding: 0.5rem 1rem;
  min-width: 7rem;
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['pure-white']};
    transition: 0.5s;
  }
`

export const DeleteButton = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
  min-width: 7rem;
  background: ${(props) => props.theme['red-300']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme['pure-white']};
    transition: 0.5s;
  }
`
