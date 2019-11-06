import React, { useState } from 'react'
import { PoseGroup } from "react-pose"
import { AnimatedNavContainer, AnimatedNavItem } from './NavbarStyles'

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const listenToScroll = () => {
    if (window.pageYOffset !== 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  window.addEventListener("scroll", listenToScroll)
    
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
