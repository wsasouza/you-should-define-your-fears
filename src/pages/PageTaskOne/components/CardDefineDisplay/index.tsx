import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { NewDefineModal } from '../NewDefineModal'

import { ContainerCardDefineDisplay } from './styles'

interface CardDefineDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  addDefineItem: (item: string) => void
}

export function CardDefineDisplay({
  icon,
  title,
  lastDate,
  addDefineItem,
}: CardDefineDisplayProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCardDefineDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button>
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          <NewDefineModal setOpen={setOpen} addDefineItem={addDefineItem} />
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardDefineDisplay>
  )
}
