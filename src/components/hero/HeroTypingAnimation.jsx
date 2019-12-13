import React, { useState } from 'react';
import Typist from "react-typist";
import { AnimationContainer, BoldAnimatedTextContainer } from './HeroStyles';
import TypeAboutMe from "./HeroTypeAboutMe";

const aboutMeArr = ["Software Engineer", "Web Developer", "Dog Lover", "Full Stack Developer"];


export default function HeroTypingAnimation({setLinksVisible}) {
  const [showAboutMe, setShowAboutMe] = useState(false);
  
  return (
    <AnimationContainer>
      <Typist
        cursor={{
          hideWhenDone: true,
          hideWhenDoneDelay: 0,
        }}
        onTypingDone={()=>{
          setShowAboutMe(true)
          setLinksVisible(true)
        }}
      >
        <BoldAnimatedTextContainer>Robert</BoldAnimatedTextContainer>
        <br />
        <BoldAnimatedTextContainer>Morrissey</BoldAnimatedTextContainer>
        
      </Typist>
      {showAboutMe && 
        <TypeAboutMe aboutMeArr={aboutMeArr} />
      }
    </AnimationContainer>
  )
}