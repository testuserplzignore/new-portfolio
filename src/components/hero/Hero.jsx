import React, { useState } from 'react'
import { getHero } from "services";
import HeroTypingAnimation from "./HeroTypingAnimation"
import HeroLinks from './HeroLinks.jsx'
import { HeroContainer } from './HeroStyles'

const HeroContent = ({resp}) => {
  const [linksVisible, setLinksVisible] = useState(false);
  
  const { heroTypingStatic, heroTypingLoop, heroSocialLinks } = resp.items[0].fields;
  
  const typingProps = {
    heroTypingStatic,
    heroTypingLoop,
    setLinksVisible
  };
  
  const linkProps = {
    active: linksVisible,
    heroSocialLinks
  };
  
  return (
    <>
      <HeroTypingAnimation {...typingProps} />
      <HeroLinks {...linkProps} />
    </>
  )
}

export default function Hero(props) {
  const [resp, loading] = getHero();
  console.log(resp);
  
  return (
    <HeroContainer>
      {!loading && 
        <HeroContent resp={resp}/>
      }
    </HeroContainer>
  )
}
