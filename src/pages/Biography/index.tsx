import author from '../../assets/tim-ferriss.jpg'
import { BioContainer, Text } from './styles'

export function Biography() {
  return (
    <BioContainer>
      <img
        src={author}
        alt="Foto de Timothy Ferriss"
        width={400}
        height={400}
      />
      <Text>
        <h1>Timothy Ferriss</h1>
        <span>Escritor</span>
        <p>
          Timothy Ferriss é um escritor americano, empresário, investidor anjo e
          palestrante. Em 2007 lançou seu primeiro livro, Trabalhe 4 Horas por
          Semana e alcançou a posição nº1 na lista de bestseller do New York
          Times e nº1 na lista de bestsellers do jornal Wall Street Journal.
          <a
            href="https://en.wikipedia.org/wiki/Tim_Ferriss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipédia
          </a>
        </p>
      </Text>
    </BioContainer>
  )
}
