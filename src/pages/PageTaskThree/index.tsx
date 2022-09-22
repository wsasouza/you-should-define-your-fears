import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  CurrencyDollar,
  HourglassHigh,
  HourglassLow,
  HourglassMedium,
} from 'phosphor-react'

import { CardItem } from '../../components/CardItem'
import { ItemCard } from '../../interfaces/itemCard'
import { getLastItemDate } from '../../utils/getLastItemDate'
import { initialValue } from '../../utils/initialValue'

import {
  CardDisplayContainer,
  CardItemContainer,
  CardItemOneYear,
  CardItemSixMonths,
  CardItemThreeYears,
  PageThreeContainer,
  TaskThreeDisplay,
} from './styles'
import { CardSixMonthsDisplay } from './components/CardSixMonthsDisplay'
import { CardOneYearDisplay } from './components/CardOneYearDisplay'
import { CardThreeYearsDisplay } from './components/CardThreeYearsDisplay'

const SIX_MONTHS_ITEMS = '@CodeTask3:sixMonths'
const ONE_YEAR_ITEMS = '@CodeTask3:oneYear'
const THREE_YEARS_ITEMS = '@CodeTask3:threeYears'

export function PageTaskThree() {
  const [sixMonthsItems, setSixMonthsItems] = useState<ItemCard[]>(
    initialValue(SIX_MONTHS_ITEMS),
  )
  const [oneYearItems, setOneYearItems] = useState<ItemCard[]>(
    initialValue(ONE_YEAR_ITEMS),
  )
  const [threeYearsItems, setThreeYearsItems] = useState<ItemCard[]>(
    initialValue(THREE_YEARS_ITEMS),
  )

  const [lastSixMonthsItemDate, setLastSixMonthsItemDate] = useState('')
  const [lastOneYearItemDate, setLastOneYearItemDate] = useState('')
  const [lastThreeYearsItemDate, setLastThreeYearsItemDate] = useState('')

  useEffect(() => {
    localStorage.setItem(SIX_MONTHS_ITEMS, JSON.stringify(sixMonthsItems))
  }, [sixMonthsItems])

  useEffect(() => {
    localStorage.setItem(ONE_YEAR_ITEMS, JSON.stringify(oneYearItems))
  }, [oneYearItems])

  useEffect(() => {
    localStorage.setItem(THREE_YEARS_ITEMS, JSON.stringify(threeYearsItems))
  }, [threeYearsItems])

  useEffect(() => {
    setLastSixMonthsItemDate(getLastItemDate(sixMonthsItems))
  }, [sixMonthsItems])

  useEffect(() => {
    setLastOneYearItemDate(getLastItemDate(oneYearItems))
  }, [oneYearItems])

  useEffect(() => {
    setLastThreeYearsItemDate(getLastItemDate(threeYearsItems))
  }, [threeYearsItems])

  function addSixMonthsItem(newSixMonthsItemTitle: string) {
    const sixMonthsItemSameTitle = sixMonthsItems.find(
      (item) => item.title === newSixMonthsItemTitle,
    )

    if (sixMonthsItemSameTitle) {
      alert('Este item já existe na coluna de 6 meses.')
    }

    const newSixMonthsItem = {
      id: uuidv4(),
      title: newSixMonthsItemTitle,
      createdAt: new Date(),
    }

    setSixMonthsItems((oldState) => [...oldState, newSixMonthsItem])
  }

  function addOneYearItem(newOneYearItemTitle: string) {
    const oneYearItemSameTitle = oneYearItems.find(
      (item) => item.title === newOneYearItemTitle,
    )

    if (oneYearItemSameTitle) {
      alert('Este item já existe na coluna de 1 ano.')
    }

    const newOneYearItem = {
      id: uuidv4(),
      title: newOneYearItemTitle,
      createdAt: new Date(),
    }

    setOneYearItems((oldState) => [...oldState, newOneYearItem])
  }

  function addThreeYearsItem(newThreeYearsItemTitle: string) {
    const threeYearsItemSameTitle = threeYearsItems.find(
      (item) => item.title === newThreeYearsItemTitle,
    )

    if (threeYearsItemSameTitle) {
      alert('Este item já existe na coluna de 3 anos.')
    }

    const newThreeYearsItem = {
      id: uuidv4(),
      title: newThreeYearsItemTitle,
      createdAt: new Date(),
    }

    setThreeYearsItems((oldState) => [...oldState, newThreeYearsItem])
  }

  function handleRemoveSixMonthsItem(id: string) {
    setSixMonthsItems((oldState) => oldState.filter((item) => item.id === id))
    alert('Item na coluna de 6 meses foi removido com sucesso!')
  }

  function handleRemoveOneYearItem(id: string) {
    setOneYearItems((oldState) => oldState.filter((item) => item.id === id))
    alert('Item na coluna de 1 ano foi removido com sucesso!')
  }

  function handleRemoveThreeYearsItem(id: string) {
    setThreeYearsItems((oldState) => oldState.filter((item) => item.id === id))
    alert('Item na coluna de 3 anos foi removido com sucesso!')
  }

  return (
    <PageThreeContainer>
      <TaskThreeDisplay>
        <h1>
          <CurrencyDollar size={32} />O preço da Inatividade
        </h1>
        <span>Emocionalmente, fisicamente, financeiramente, etc.</span>
      </TaskThreeDisplay>
      <CardDisplayContainer>
        <CardSixMonthsDisplay
          icon={<HourglassHigh size={32} />}
          title="6 meses"
          lastDate={lastSixMonthsItemDate}
          addSixMonthsItem={addSixMonthsItem}
        />

        <CardOneYearDisplay
          icon={<HourglassMedium size={32} />}
          title="1 ano"
          lastDate={lastOneYearItemDate}
          addOneYearItem={addOneYearItem}
        />

        <CardThreeYearsDisplay
          icon={<HourglassLow size={32} />}
          title="3 anos"
          lastDate={lastThreeYearsItemDate}
          addThreeYearsItem={addThreeYearsItem}
        />
      </CardDisplayContainer>
      <CardItemContainer>
        <CardItemSixMonths>
          <h2>Card Item</h2>
        </CardItemSixMonths>
        <CardItemOneYear>
          <h2>Card Item</h2>
        </CardItemOneYear>
        <CardItemThreeYears>
          <h2>Card Item</h2>
        </CardItemThreeYears>
      </CardItemContainer>
    </PageThreeContainer>
  )
}
