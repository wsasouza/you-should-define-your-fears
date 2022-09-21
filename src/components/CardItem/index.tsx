import { Trash } from 'phosphor-react'
import { CardItemContainer } from './styles'

export function CardItem() {
  return (
    <CardItemContainer>
      <header>
        <span>1</span>
        <button>
          <Trash size={20} />
        </button>
      </header>
      <p>
        O meu maior medo é não conseguir uma carreira como dev. Então deve
        acontecer algo que eu não entende.
      </p>
      <footer>
        <span>Há cerca de 5 minutos</span>
      </footer>
    </CardItemContainer>
  )
}
