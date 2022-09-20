import { Article, Brain, House, Play } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/code-logo-cz.svg'

import { HeaderContainer, HeaderMenu } from './styles'

interface HeaderProps {
  scroll: boolean
}

export function Header({ scroll }: HeaderProps) {
  return (
    <HeaderContainer scroll={scroll}>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" width={130} />
        </NavLink>
        <HeaderMenu>
          <NavLink to="/" title="Home">
            <House size={22} weight="fill" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/video" title="Vídeo da apresentação">
            <Play size={22} weight="fill" />
            <span>Palestra</span>
          </NavLink>
          <NavLink to="/article" title="Artigo">
            <Article size={22} weight="fill" />
            <span>Artigo</span>
          </NavLink>
          <NavLink to="/task" title="Tarefa">
            <Brain size={22} weight="fill" />
            <span>Exercício</span>
          </NavLink>
        </HeaderMenu>
      </nav>
    </HeaderContainer>
  )
}
