import styled from "styled-components"
import { breakpoint } from 'style'
import posed from 'react-pose';


const leftMarginMobile = "10%"
const LeftMarginLaptop = "2%"

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
`

export const AnimationContainer = styled.div`
  padding: ${leftMarginMobile};
  font-size: 2em;
  ${breakpoint.laptop} {
    padding: ${LeftMarginLaptop};
    font-size: 4em;
  }
`;

export const AnimatedTextContainer = styled.div`
  display: inline-block;
  user-select: none;
  margin-bottom: 2%;
  ${breakpoint.laptop} {
    margin-bottom: .5%;
  }
`;

export const BoldAnimatedTextContainer = styled(AnimatedTextContainer)`
  font-weight: 500; 
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 3%;
  left: ${leftMarginMobile};
  ${breakpoint.laptop} {
    left: ${LeftMarginLaptop};
  }
`;

export const AnimatedLinkContainer = posed(LinkContainer)({
  visible: {
    staggerChildren: 50,
  }
})

export const Icon = styled.img`
  width: 50px;
  margin-right: 10px;
  ${breakpoint.laptop} {
    width: 75px;
    margin-right: 15px;
  }
`;

export const AnimatedIcon = posed(Icon)({
  hoverable: true,
  pressable: true,
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  }
})
