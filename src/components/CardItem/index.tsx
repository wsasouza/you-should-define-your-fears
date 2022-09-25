import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Eraser, Trash, X } from 'phosphor-react'

import { ItemCard } from '../../interfaces/itemCard'

import {
  CancelButton,
  CardItemContainer,
  CloseButton,
  DeleteButton,
  DialogAction,
  DialogContent,
  DialogDescription,
  OrderDisplay,
  Overlay,
  Title,
} from './styles'

interface CardItemProps {
  item: ItemCard
  order: number
  icon?: ReactNode
  removeCard: (id: string) => void
}

export function CardItem({ item, order, icon, removeCard }: CardItemProps) {
  const [open, setOpen] = useState(false)

  const createdDateFormatted = format(
    item.createdAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )

  const createdDateRelativeToNow = formatDistanceToNow(item.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <CardItemContainer>
      <header>
        <OrderDisplay>
          <span>{order}</span>
          {icon}
        </OrderDisplay>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button title="Apagar item">
              <Trash size={20} />
            </button>
          </Dialog.Trigger>
          <Overlay />
          <DialogContent>
            <Title>
              <Eraser size={24} />
              Apagar item
            </Title>
            <CloseButton asChild>
              <X size={24} />
            </CloseButton>
            <DialogDescription>
              Tem certeza que deseja apagar este item?
            </DialogDescription>
            <DialogAction>
              <CancelButton>Cancelar</CancelButton>
              <DeleteButton onClick={() => removeCard(item.id)}>
                Confirmar
              </DeleteButton>
            </DialogAction>
          </DialogContent>
        </Dialog.Root>
      </header>
      <p>{item.title}</p>
      <footer>
        <time
          title={createdDateFormatted}
          dateTime={item.createdAt.toISOString()}
        >
          {createdDateRelativeToNow}
        </time>
      </footer>
    </CardItemContainer>
  )
}
