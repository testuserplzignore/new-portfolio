import React, { useState } from 'react'
import Typing, {Backspace, Delay} from 'react-typing-animation'
import { AnimatedTextContainer, AnimationContainer, BoldAnimatedTextContainer } from './HeroStyles'

const aboutMe = ["Software Engineer", "Web Developer", "Dog Lover", "Full Stack Developer"]

export default function HeroTypingAnimation({setLinksVisible}) {
  const [aboutMeIndex, setAboutMeIndex] = useState(0)
  const [showAboutMe, setShowAboutMe] = useState(false)

  const nextAboutMe = () => {
    if (aboutMeIndex + 1 >= aboutMe.length) setAboutMeIndex(0)
    else setAboutMeIndex(aboutMeIndex + 1)
  }  
  
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
        <Typing loop onFinishedTyping={nextAboutMe} >
          <Delay ms={500} />
          <AnimatedTextContainer>{aboutMe[aboutMeIndex]}</AnimatedTextContainer>
          <Delay ms={1500} />
          <Backspace count={aboutMe[aboutMeIndex].length} />
        </Typing>
      }
    </AnimationContainer>
  )
}

