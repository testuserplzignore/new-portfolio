import React, { useState, useEffect } from "react";
import Typist from "react-typist"
import { AnimatedTextContainer} from './HeroStyles'
import uuidv4 from "uuid/v4"

export default ({ aboutMeArr }) => {
  const [typing, setTyping] = useState(true);
  const [key, setKey] = useState(uuidv4());
  
  const typedElements = aboutMeArr.map(aboutMe => (
      <AnimatedTextContainer key={uuidv4()}>
        <Typist.Delay ms={500} />
        {aboutMe}
        <Typist.Backspace count={aboutMe.length} delay={1500} />
      </AnimatedTextContainer>
  ));

  useEffect(() => {
    if(!typing) {
      setTyping(true);
      const newKey = uuidv4();
      setKey(newKey);
    };
  }, [typing])

  return(
    <>
      { typing &&
        <Typist key={key} onTypingDone={() => setTyping(false)}>
          {typedElements}
        </Typist>
      }
    </>
  )
}