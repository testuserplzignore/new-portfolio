import React from 'react'
import { PoseGroup } from "react-pose"
import { AnimatedNavContainer, AnimatedNavItem } from './NavbarStyles'
import useAtTopOfPage from '../../hooks/useAtTopOfPage'

export default function Navbar() {
  const visible = useAtTopOfPage() ? false : true
  
  return (
    <PoseGroup>
      {visible &&
        <AnimatedNavContainer key="unique">
        <AnimatedNavItem>Home</AnimatedNavItem>
      </AnimatedNavContainer>
      }
    </PoseGroup>
  )
}
