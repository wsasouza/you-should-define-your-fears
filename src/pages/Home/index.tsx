import { NavLink } from 'react-router-dom'
import illustration from '../../assets/hard-choices.svg'
import { HomeContainer, Text } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Text>
        <h1>Por que você deve definir seus medos em vez de seus objetivos</h1>
        <NavLink to="/biography">Tim Ferriss</NavLink>
      </Text>
      <img src={illustration} alt="" />
    </HomeContainer>
  )
}
