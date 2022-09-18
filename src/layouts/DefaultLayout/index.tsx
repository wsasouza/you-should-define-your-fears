import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const [activeColor, setActiveColor] = useState(false)

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
    <LayoutContainer>
      <Header scroll={activeColor} />
      <Outlet />
    </LayoutContainer>
  )
}
