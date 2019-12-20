import React from 'react'
import { AnimatedLinkContainer, AnimatedIcon } from './HeroStyles'


export default function HeroLinks({active, heroSocialLinks}) {
  const visible = active ? 'visible' : 'hidden';
  console.log(heroSocialLinks);

  return (
    <AnimatedLinkContainer pose={visible}>
      {heroSocialLinks.map(({ fields, sys }) => (
        <a
          href={fields.url}
          key={sys.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatedIcon src={fields.icon.fields.file.url} />
        </a>
      ))}
    </AnimatedLinkContainer>
  );
}
