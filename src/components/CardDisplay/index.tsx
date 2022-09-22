import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { ContainerCardDisplay } from './styles'

interface CardDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  open: boolean
  setOpen: (state: boolean) => void
  modal: ReactNode
}

export function CardDisplay({
  icon,
  title,
  lastDate,
  open,
  setOpen,
  modal,
}: CardDisplayProps) {
  return (
    <ContainerCardDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button>
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          {modal}
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardDisplay>
  )
}
