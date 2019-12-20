import React from 'react';
import styled from "styled-components";
import { getAbout } from "services";
import {common} from "style";

const AboutMeContainer = styled.div`
  ${common.maxWidth}
  padding: 5%;
  margin: 0 auto;
  margin-top: 45px;
`
const AboutMeTitle = styled.div`
  font-size: 2.5em;
  font-weight: 375;
  text-align: center;
`
const AboutMeSubHeading = styled.div`
  margin: 20px 0;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
`;

const AboutMeText = styled.p`
  ${common.maxWidth};
  margin: 28px auto 0 auto;
  text-indent: 36px;
  font-size: 18px;
  line-height: 24px;
`;

const AboutMeContent = ({items}) => (
  <>
    {items.map(({fields, sys}) => (
      <React.Fragment key={sys.id}>
        <AboutMeSubHeading>{fields.subHeading}</AboutMeSubHeading>
        <AboutMeText>{fields.text}</AboutMeText>
      </React.Fragment>
    ))}
  </>
)

export default function AboutMe() {
  const [aboutMe, loading] = getAbout();
  
  return (
    <AboutMeContainer>
      <AboutMeTitle>About Me</AboutMeTitle>
      { !loading && <AboutMeContent items={aboutMe.items} /> }
    </AboutMeContainer>
  );
}
