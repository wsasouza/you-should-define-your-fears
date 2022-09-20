import {
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
} from 'phosphor-react'
import { NavLink, Outlet } from 'react-router-dom'

import { TaskContainer } from './styles'

export function Task() {
  return (
    <TaskContainer>
      <nav>
        <NavLink to="page-one">
          <span>Página</span>
          <NumberCircleOne size={22} weight="fill" />
        </NavLink>
        <NavLink to="page-two">
          <span>Página</span>
          <NumberCircleTwo size={22} weight="fill" />
        </NavLink>
        <NavLink to="page-three">
          <span>Página</span>
          <NumberCircleThree size={22} weight="fill" />
        </NavLink>
      </nav>

      <Outlet />
    </TaskContainer>
  )
}
