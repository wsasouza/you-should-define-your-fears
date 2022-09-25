import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
} from 'phosphor-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { TaskContainer } from './styles'

export function Task() {
  const [animationParent] = useAutoAnimate()

  return (
    <TaskContainer ref={animationParent as React.RefObject<HTMLDivElement>}>
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
