import React, { useState } from 'react'
import Typing from 'react-typing-animation'
import { AnimationContainer, BoldAnimatedTextContainer } from './HeroStyles'
import TypeAboutMe from "./HeroTypeAboutMe"

const aboutMeArr = ["Software Engineer", "Web Developer", "Dog Lover", "Full Stack Developer"];


export default function HeroTypingAnimation({setLinksVisible}) {
  const [showAboutMe, setShowAboutMe] = useState(false);
  
  return (
    <AnimationContainer>
      <Typing
        onFinishedTyping={()=>{
          setShowAboutMe(true)
          setLinksVisible(true)
        }}
      >
        <BoldAnimatedTextContainer>Robert</BoldAnimatedTextContainer>
        <BoldAnimatedTextContainer>Morrissey</BoldAnimatedTextContainer>
        
      </Typing>
      {showAboutMe && 
        <TypeAboutMe aboutMeArr={aboutMeArr} />
      }
    </AnimationContainer>
  )
}