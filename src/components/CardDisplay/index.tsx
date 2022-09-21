import { Crosshair, PlusCircle } from 'phosphor-react'
import { ContainerCardDisplay } from './styles'

export function CardDisplay() {
  return (
    <ContainerCardDisplay>
      <header>
        <Crosshair size={32} weight="regular" />
        <button>
          <PlusCircle size={32} weight="fill" />
        </button>
      </header>
      <p>Definir</p>
      <span>Último medo definido em 21/09/2022</span>
    </ContainerCardDisplay>
  )
}
