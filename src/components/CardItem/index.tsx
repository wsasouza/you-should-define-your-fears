import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash } from 'phosphor-react'

import { ItemCard } from '../../interfaces/itemCard'

import { CardItemContainer } from './styles'

interface CardItemProps {
  item: ItemCard
  order: number
  removeCard: (id: string) => void
}

export function CardItem({ item, order, removeCard }: CardItemProps) {
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
        <span>{order}</span>
        <button onClick={() => removeCard(item.id)} title="Apagar item">
          <Trash size={20} />
        </button>
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
