import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'

import { NewThreeYearsModal } from '../NewThreeYearsModal'

import { ContainerCardThreeYearsDisplay } from './styles'

interface CardThreeYearsDisplayProps {
  icon: ReactNode
  title: string
  lastDate: string
  addThreeYearsItem: (item: string) => void
}

export function CardThreeYearsDisplay({
  icon,
  title,
  lastDate,
  addThreeYearsItem,
}: CardThreeYearsDisplayProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCardThreeYearsDisplay>
      <header>
        {icon}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button>
              <PlusCircle size={32} weight="fill" />
            </button>
          </Dialog.Trigger>
          <NewThreeYearsModal
            setOpen={setOpen}
            addThreeYearsItem={addThreeYearsItem}
          />
        </Dialog.Root>
      </header>
      <p>{title}</p>
      <span>{lastDate}</span>
    </ContainerCardThreeYearsDisplay>
  )
}
