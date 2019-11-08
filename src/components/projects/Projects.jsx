import React from 'react'
import {projects} from "assets"
import { 
  StyledDesktop,
  MobileProjectLayout, 
  ProjectImage, 
  MobileProjectDescription, 
  MobileProjectTitle, 
  AnimatedIcon
} from './projectStyles';


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
          <>
            <AnimatedIcon src="/html.svg" />
            <AnimatedIcon src="/js.svg" />
            <AnimatedIcon src="/css.svg" />
            <AnimatedIcon src="/sql.svg" />
          </>
        </MobileProjectLayout>
      )}
    </div>
  )
}
