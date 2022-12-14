import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as Dialog from '@radix-ui/react-dialog'
import { Asterisk, PlusCircle } from 'phosphor-react'
import { toast } from 'react-toastify'

import { CardItem } from '../../components/CardItem'
import { ItemCard } from '../../interfaces/itemCard'
import { initialValue } from '../../utils/initialValue'
import { getLastItemDate } from '../../utils/getLastItemDate'

import {
  CardItemContainer,
  PageTwoContainer,
  TaskDisplay,
  TaskDisplayAction,
} from './styles'
import { NewBenefitModal } from './components/NewBenefitModal'

const BENEFITS_ITEMS = '@CodeTask2:benefits'

export function PageTaskTwo() {
  const [benefitsItems, setBenefitsItems] = useState<ItemCard[]>(
    initialValue(BENEFITS_ITEMS),
  )

  const [open, setOpen] = useState(false)

  const [lastBenefitItemDate, setLastBenefitItemDate] = useState('')

  useEffect(() => {
    localStorage.setItem(BENEFITS_ITEMS, JSON.stringify(benefitsItems))
  }, [benefitsItems])

  useEffect(() => {
    setLastBenefitItemDate(getLastItemDate(benefitsItems))
  }, [benefitsItems])

  function addBenefitItem(newBenefitItemTitle: string) {
    const benefitItemSameTitle = benefitsItems.find(
      (item) => item.title === newBenefitItemTitle,
    )

    if (benefitItemSameTitle) {
      toast.warning('Este item já existe na coluna Benefícios.')
      return
    }

    const newBenefitItem = {
      id: uuidv4(),
      title: newBenefitItemTitle,
      createdAt: new Date(),
    }

    setBenefitsItems((oldState) => [...oldState, newBenefitItem])
    toast.success('Item adicionado na tabela Benefícios.')
  }

  function handleRemoveBenefitItem(id: string) {
    setBenefitsItems((oldState) => oldState.filter((item) => item.id !== id))
    toast.info('Item na coluna Benefícios foi removido com sucesso.')
  }

  return (
    <PageTwoContainer>
      <TaskDisplay>
        <TaskDisplayAction>
          <h1>
            <Asterisk size={32} />
            Quais seriam os benefícios de uma tentativa ou de um sucesso
            parcial?
          </h1>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button title="Adicionar item">
                <PlusCircle size={36} weight="fill" />
              </button>
            </Dialog.Trigger>
            <NewBenefitModal
              setOpen={setOpen}
              addBenefitItem={addBenefitItem}
            />
          </Dialog.Root>
        </TaskDisplayAction>
        <span>{lastBenefitItemDate}</span>
      </TaskDisplay>

      <CardItemContainer>
        {benefitsItems.map((item, index) => {
          return (
            <CardItem
              key={item.id}
              item={item}
              order={index + 1}
              icon={<Asterisk size={32} />}
              removeCard={handleRemoveBenefitItem}
            />
          )
        })}
      </CardItemContainer>
    </PageTwoContainer>
  )
}
