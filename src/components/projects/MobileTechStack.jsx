import React, {useState} from 'react'
import { AnimatedIcon, MobileTechContainer } from './projectStyles';


export default function MobileTechStack({tech}) {
  const [selectedTech, setSelectedTech] = useState(null)
  
  return (
    <MobileTechContainer>
      <h3>Technologies: {selectedTech}</h3>
      {tech.map(t => <AnimatedIcon 
        src={t.fields.icon.fields.file.url} 
        alt={t.fields.altText} 
        key={t.sys.id}
        onMouseEnter={() => setSelectedTech(t.fields.name)}
        onMouseLeave={() => setSelectedTech(null)}
      />)}
    </MobileTechContainer>
  )
}
