import { Brain, House, Play, Article } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { NavMobileContainer } from './styles'

interface NavMobileProps {
  setOpen: (state: boolean) => void
}

export function NavMobile({ setOpen }: NavMobileProps) {
  return (
    <NavMobileContainer>
      <NavLink end to="/" title="Home" onClick={() => setOpen(false)}>
        <House size={22} weight="fill" />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/video"
        title="Vídeo da apresentação"
        onClick={() => setOpen(false)}
      >
        <Play size={22} weight="fill" />
        <span>Palestra</span>
      </NavLink>
      <NavLink to="/article" title="Artigo" onClick={() => setOpen(false)}>
        <Article size={22} weight="fill" />
        <span>Artigo</span>
      </NavLink>
      <NavLink to="/task" title="Tarefa" onClick={() => setOpen(false)}>
        <Brain size={22} weight="fill" />
        <span>Exercício</span>
      </NavLink>
    </NavMobileContainer>
  )
}
