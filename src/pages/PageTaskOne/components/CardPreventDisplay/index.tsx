import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { NewPreventModal } from '../NewPreventModal'

import { ContainerCardPreventDisplay } from './styles'

interface CardPreventDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  addPreventItem: (item: string) => void
}

export function CardPreventDisplay({
  icon,
  title,
  lastDate,
  addPreventItem,
}: CardPreventDisplayProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCardPreventDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button>
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          <NewPreventModal setOpen={setOpen} addPreventItem={addPreventItem} />
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardPreventDisplay>
  )
}
