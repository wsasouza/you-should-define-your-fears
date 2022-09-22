import { ItemCard } from '../interfaces/itemCard'
import { dateFormatter } from './formatter'

export function getLastItemDate(collection: ItemCard[]) {
  if (collection.length === 0) return 'Nenhum item adicionado'

  const lastItemDate = new Date(
    Math.max.apply(
      Math,
      collection.map((item) => item.createdAt.getTime()),
    ),
  )

  const lastItemDateFormatted = `Último item adicionado em ${dateFormatter.format(
    lastItemDate,
  )}`

  return lastItemDateFormatted
}
