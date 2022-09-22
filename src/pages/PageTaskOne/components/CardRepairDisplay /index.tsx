import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { NewRepairModal } from '../NewRepairModal'

import { ContainerCardRepairDisplay } from './styles'

interface CardRepairDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  addRepairItem: (item: string) => void
}

export function CardRepairDisplay({
  icon,
  title,
  lastDate,
  addRepairItem,
}: CardRepairDisplayProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCardRepairDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button>
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          <NewRepairModal setOpen={setOpen} addRepairItem={addRepairItem} />
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardRepairDisplay>
  )
}
