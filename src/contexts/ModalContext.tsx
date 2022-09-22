import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface ModalContextType {
  open: boolean
  setOpen: (state: boolean) => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false)

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
