import React, { useState } from 'react'
import HeroTypingAnimation from "./HeroTypingAnimation"
import HeroLinks from './HeroLinks.jsx'
import { HeroContainer } from './HeroStyles'

export default function Hero(props) {
  const [linksVisible, setLinksVisible] = useState(false)
  return (
    <HeroContainer>
      <HeroTypingAnimation setLinksVisible={setLinksVisible} />
      <HeroLinks active={linksVisible} />
    </HeroContainer>
  )
}
