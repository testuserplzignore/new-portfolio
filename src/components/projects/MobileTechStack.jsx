import React, {useState} from 'react'
import { AnimatedIcon, MobileTechContainer } from './projectStyles';


export default function MobileTechStack({tech}) {
  const [selectedTech, setSelectedTech] = useState(null)


  return (
    <MobileTechContainer>
      <h3>Technologies: {selectedTech}</h3>
      {tech.map(t => <AnimatedIcon 
        src={t.src} 
        alt={t.name} 
        key={t.name}
        onMouseEnter={() => setSelectedTech(t.name)}
        onMouseLeave={() => setSelectedTech(null)}
      />)}
    </MobileTechContainer>
  )
}
