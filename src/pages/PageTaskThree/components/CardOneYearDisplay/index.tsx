import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { NewOneYearModal } from '../NewOneYearModal'

import { ContainerCardOneYearDisplay } from './styles'

interface CardOneYearDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  addOneYearItem: (item: string) => void
}

export function CardOneYearDisplay({
  icon,
  title,
  lastDate,
  addOneYearItem,
}: CardOneYearDisplayProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCardOneYearDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button title="Adicionar item">
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          <NewOneYearModal setOpen={setOpen} addOneYearItem={addOneYearItem} />
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardOneYearDisplay>
  )
}
