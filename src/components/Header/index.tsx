import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import autoAnimate from '@formkit/auto-animate'
import { Article, Brain, DotsThreeCircle, House, Play, X } from 'phosphor-react'

import logo from '../../assets/code-logo-cz.svg'
import { NavMobile } from '../NavMobile'

import { HeaderContainer, HeaderMenu, MenuMobile } from './styles'

interface HeaderProps {
  scroll: boolean
}

export function Header({ scroll }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <HeaderContainer scroll={scroll} ref={parent}>
      <nav>
        <Link to="/" title="Home">
          <img src={logo} alt="" width={130} />
        </Link>
        <HeaderMenu>
          <NavLink end to="/" title="Home">
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
        <MenuMobile>
          <button onClick={toggle}>
            {isOpen ? <X size={40} /> : <DotsThreeCircle size={40} />}
          </button>
        </MenuMobile>
      </nav>
      {isOpen && <NavMobile setOpen={setIsOpen} />}
    </HeaderContainer>
  )
}
