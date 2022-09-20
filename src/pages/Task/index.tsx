import { NavLink, Outlet } from 'react-router-dom'

import { TaskContainer } from './styles'

export function Task() {
  return (
    <TaskContainer>
      <nav>
        <NavLink to="page-one">Página Um</NavLink>
        <NavLink to="page-two">Página Dois</NavLink>
        <NavLink to="page-three">Página Três</NavLink>
      </nav>
      <Outlet />
    </TaskContainer>
  )
}
