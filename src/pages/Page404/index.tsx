import page404Image from '../../assets/page-404.svg'
import { ImageContainer, Page404Container } from './styles'

export function Page404() {
  return (
    <Page404Container>
      <ImageContainer>
        <img src={page404Image} alt="Página não encontrada" />
      </ImageContainer>
    </Page404Container>
  )
}
