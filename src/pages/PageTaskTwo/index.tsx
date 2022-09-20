import { PlusCircle } from 'phosphor-react'
import { PageTwoContainer, TaskDisplay } from './styles'

export function PageTaskTwo() {
  return (
    <PageTwoContainer>
      <TaskDisplay>
        <h1>
          Quais seriam os benefícios de uma tentativa ou de um sucesso parcial?
        </h1>
        <button>
          <PlusCircle size={36} weight="fill" />
        </button>
      </TaskDisplay>
    </PageTwoContainer>
  )
}
