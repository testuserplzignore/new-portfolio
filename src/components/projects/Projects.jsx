import React from 'react';
import uuidv4 from "uuid/v4";
import { projects } from "assets";
import { 
  StyledDesktop,
  MobileProjectLayout, 
  ProjectImage, 
  MobileProjectDescription, 
  MobileProjectTitle
} from './projectStyles';
import MobileTechStack from './MobileTechStack';

const Project = (project) =>
  <MobileProjectLayout>
    <MobileProjectTitle>{project.name}</MobileProjectTitle>
    <StyledDesktop address={project.link} >
      <ProjectImage src={project.img} alt={`${project.name} screenshot`} />
    </StyledDesktop>
    <MobileProjectDescription>{project.description}</MobileProjectDescription>
    <MobileTechStack tech={project.tech} />
  </MobileProjectLayout>

const ProjectDisplay = ({projects}) => projects.map(project =>
  <Project {...project} key={uuidv4()} />
)

export default function Projects() {  
  return (
    <div>
      <ProjectDisplay projects={projects}/>
    </div>
  )
}
