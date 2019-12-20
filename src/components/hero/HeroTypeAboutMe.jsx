import React, { useState } from "react";
import Typist from "react-typist"
import { AnimatedTextContainer} from './HeroStyles'
import uuidv4 from "uuid/v4"

export default ({ aboutMeArr }) => {
  const [key, setKey] = useState(uuidv4());
  
  const typedElements = aboutMeArr.map(aboutMe => (
      <AnimatedTextContainer key={uuidv4()}>
        <Typist.Delay ms={500} />
        {aboutMe}
        <Typist.Backspace count={aboutMe.length} delay={1500} />
      </AnimatedTextContainer>
  ));

  return(
    <Typist key={key} onTypingDone={() => setKey(uuidv4())}>
      {typedElements}
    </Typist>
  )
}