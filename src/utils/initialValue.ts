import { ItemCard } from '../interfaces/itemCard'

export function initialValue(items: string) {
  const saved = localStorage.getItem(items)

  const initialValue = JSON.parse(saved || '[]')

  const initialValueWithDate = initialValue.map((itemCard: ItemCard) => {
    return { ...itemCard, createdAt: new Date(itemCard.createdAt) }
  })
  return initialValueWithDate || []
}
