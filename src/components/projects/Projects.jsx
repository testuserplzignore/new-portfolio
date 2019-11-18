import React from 'react'
import { projects } from "assets"
import { 
  StyledDesktop,
  MobileProjectLayout, 
  ProjectImage, 
  MobileProjectDescription, 
  MobileProjectTitle
} from './projectStyles';
import MobileTechStack from './MobileTechStack';


export default function Projects() {
  console.log(projects); 
  
  
  return (
    <div>
      {projects.map(project => 
        < MobileProjectLayout key={project.name}>
          <MobileProjectTitle>{project.name}</MobileProjectTitle>
          <StyledDesktop address={project.link}>
            <ProjectImage src={project.img} alt={`${project.name} screenshot`} />
          </StyledDesktop>
          <MobileProjectDescription>{project.description}</MobileProjectDescription>
          <MobileTechStack tech={project.tech} />
        </MobileProjectLayout>
      )}
    </div>
  )
}
