import React, { Fragment } from "react";
import Typing, { Backspace, Delay, Reset } from 'react-typing-animation'
import { AnimatedTextContainer} from './HeroStyles'

export default ({ aboutMeArr }) => (
  <Typing loop>
    {aboutMeArr.map(aboutMe => (
      <Fragment key={aboutMe}>
        <Delay ms={500} />
        <AnimatedTextContainer>{aboutMe}</AnimatedTextContainer>
        <Delay ms={1500} />
        <Backspace count={aboutMe.length} />
      </Fragment>
    ))}
    <Reset />
  </Typing>
)