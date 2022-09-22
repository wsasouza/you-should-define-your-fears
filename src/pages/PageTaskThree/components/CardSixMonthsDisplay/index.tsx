import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { NewSixMonthsModal } from '../NewSixMonthsModal'

import { ContainerCardSixMonthsDisplay } from './styles'

interface CardSixMonthsDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  addSixMonthsItem: (item: string) => void
}

export function CardSixMonthsDisplay({
  icon,
  title,
  lastDate,
  addSixMonthsItem,
}: CardSixMonthsDisplayProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCardSixMonthsDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button>
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          <NewSixMonthsModal
            setOpen={setOpen}
            addSixMonthsItem={addSixMonthsItem}
          />
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardSixMonthsDisplay>
  )
}
