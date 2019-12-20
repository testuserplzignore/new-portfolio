import React from 'react';
import { getProjects } from "services";
import { 
  StyledDesktop,
  MobileProjectLayout, 
  ProjectImage, 
  MobileProjectDescription, 
  MobileProjectTitle
} from './projectStyles';
import MobileTechStack from './MobileTechStack';



const Project = ({ fields }) => (
  <MobileProjectLayout>
    <MobileProjectTitle>{fields.title}</MobileProjectTitle>
    <StyledDesktop address={fields.link}>
      <ProjectImage
        src={fields.image.fields.file.url}
        alt={`${fields.title} screenshot`}
      />
    </StyledDesktop>
    <MobileProjectDescription>{fields.description}</MobileProjectDescription>
    <MobileTechStack tech={fields.skills} />
  </MobileProjectLayout>
);

const ProjectDisplay = ({projects}) => projects.map(project =>
  <Project {...project} key={project.sys.id} />
)

export default function Projects() {
  const [projects, loading] = getProjects();
  
  return <div>{!loading && <ProjectDisplay projects={projects.items} />}</div>;
}
