import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const [activeColor, setActiveColor] = useState(false)
  const [animationParent] = useAutoAnimate()

  useEffect(() => {
    function scroll() {
      if (window.scrollY > 10) {
        setActiveColor(true)
      } else {
        setActiveColor(false)
      }
    }

    window.addEventListener('scroll', scroll)
  }, [activeColor])

  return (
    <LayoutContainer ref={animationParent as React.RefObject<HTMLDivElement>}>
      <Header scroll={activeColor} />
      <Outlet />
    </LayoutContainer>
  )
}
