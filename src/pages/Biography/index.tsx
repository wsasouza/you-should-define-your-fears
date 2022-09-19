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
        <p></p>
      </Text>
    </BioContainer>
  )
}
