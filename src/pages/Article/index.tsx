import { Calendar } from 'phosphor-react'

import author from '../../assets/tim-ferriss.jpg'
import { Section } from './components/Section'

import { article } from '../../utils/articleText'

import {
  ArticleContainer,
  Author,
  AuthorContainer,
  Content,
  DateEvent,
  Intro,
} from './styles'

export function Article() {
  return (
    <ArticleContainer>
      <Intro>
        <h1>Por que você deve definir seus medos em vez de seus objetivos</h1>
        <p>
          <strong>As escolhas difíceis – </strong> o que mais tememos fazer,
          perguntar, dizer – muitas vezes são exatamente o que precisamos fazer.
          Como podemos superar a autoparalisia e agir? Tim Ferriss nos encoraja
          a visualizar e escrever nossos medos em detalhes, em um exercício
          simples, mas poderoso, que ele chama de{' '}
          <strong>definir o medo</strong>. Saiba mais sobre como essa prática
          pode ajudá-lo a prosperar em ambientes de alto estresse e separar o
          que você pode controlar do que não pode.
        </p>
        <AuthorContainer>
          <Author>
            <img src={author} alt="Foto Tim Ferriss" height={60} width={60} />
            <span>Tim Ferriss</span>
          </Author>
          <DateEvent>
            <Calendar size={24} weight="bold" />
            <span>14 Jul, 2017</span>
          </DateEvent>
        </AuthorContainer>
      </Intro>
      <Content>
        {article.map((section) => {
          return (
            <Section
              key={section.id}
              texts={section.texts}
              image={section.image}
              legend={section.legend}
            />
          )
        })}
      </Content>
    </ArticleContainer>
  )
}
