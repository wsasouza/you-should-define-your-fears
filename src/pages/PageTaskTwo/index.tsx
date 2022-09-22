import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'

import { CardItem } from '../../components/CardItem'
import { ItemCard } from '../../interfaces/itemCard'
import { initialValue } from '../../utils/initialValue'

import { CardItemContainer, PageTwoContainer, TaskDisplay } from './styles'

const BENEFITS_ITEMS = '@CodeTask2:benefits'

export function PageTaskTwo() {
  const [benefitsItems, setBenefitsItems] = useState<ItemCard[]>(
    initialValue(BENEFITS_ITEMS),
  )

  useEffect(() => {
    localStorage.setItem(BENEFITS_ITEMS, JSON.stringify(benefitsItems))
  }, [benefitsItems])

  function handleAddBenefitItem(newBenefitItemTitle: string) {
    const benefitItemSameTitle = benefitsItems.find(
      (item) => item.title === newBenefitItemTitle,
    )

    if (benefitItemSameTitle) {
      alert('Este item já existe na coluna de Benefícios.')
    }

    const newBenefitItem = {
      id: uuidv4(),
      title: newBenefitItemTitle,
      createdAt: new Date(),
    }

    setBenefitsItems((oldState) => [...oldState, newBenefitItem])
  }

  function handleRemoveBenefitItem(id: string) {
    setBenefitsItems((oldState) => oldState.filter((item) => item.id === id))
    alert('Item na coluna Benefícios foi removido com sucesso!')
  }

  return (
    <PageTwoContainer>
      <TaskDisplay>
        <h1>
          Quais seriam os benefícios de uma tentativa ou de um sucesso parcial?
        </h1>
        <button title="Adicionar item">
          <PlusCircle size={36} weight="fill" />
        </button>
      </TaskDisplay>
      <CardItemContainer>
        <CardItem />
      </CardItemContainer>
    </PageTwoContainer>
  )
}
