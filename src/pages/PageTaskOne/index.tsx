import { CardDisplay } from '../../components/CardDisplay'
import { CardItem } from '../../components/CardItem'
import {
  CardDisplayContainer,
  CardItemContainer,
  CardItemDefine,
  CardItemPrevent,
  PageOneContainer,
  TaskOneDisplay,
} from './styles'

export function PageTaskOne() {
  return (
    <PageOneContainer>
      <TaskOneDisplay>
        <h1>E se eu ... ?</h1>
      </TaskOneDisplay>
      <CardDisplayContainer>
        <CardDisplay />
        <CardDisplay />
        <CardDisplay />
      </CardDisplayContainer>
      <CardItemContainer>
        <CardItemDefine>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </CardItemDefine>
        <CardItemPrevent>
          <CardItem />
          <CardItem />
          <CardItem />
        </CardItemPrevent>
      </CardItemContainer>
    </PageOneContainer>
  )
}
