import React from 'react'
import { AnimatedLinkContainer, AnimatedIcon } from './HeroStyles'


export default function HeroLinks({active}) {
  const visible = active ? 'visible' : 'hidden';

  return (
      <AnimatedLinkContainer pose={visible}>
        <a
          href="https://www.linkedin.com/in/robert-c-morrissey/"
          target='_blank'
          rel="noopener noreferrer"
        >
          <AnimatedIcon key="/linkedin.svg" src="/linkedin.svg" />
        </a>
        <a
          href="https://github.com/ElllGeeEmm/"
          target='_blank'
          rel="noopener noreferrer"
        >
          <AnimatedIcon key="/github.svg" src="/github.svg" />
        </a>
        <a
          href="https://twitter.com/RobDoesJS"
          target='_blank'
          rel="noopener noreferrer"
        >
          <AnimatedIcon key="/twitter.svg" src="/twitter.svg" />
        </a>
      </AnimatedLinkContainer>
  )
}
