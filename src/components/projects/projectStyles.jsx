import styled from "styled-components"
import posed from "react-pose"
import Desktop from "./Desktop"
import { common } from "style"

const {maxWidth} = common;


export const StyledDesktop = styled(Desktop)`
  ${maxWidth};
  margin: 0 auto;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`

export const MobileProjectLayout = styled.div`
  margin: 0 auto 28px auto;
  padding: 5%;
`

export const MobileProjectTitle = styled.h2`
  ${maxWidth}
  margin: 0 auto 28px auto;
  font-size: 28px;
`

export const MobileProjectDescription = styled.p`
  ${maxWidth};
  margin: 28px auto 0 auto;
  text-indent: 36px;
  font-size: 18px;
  line-height: 24px;
`
export const MobileTechContainer = styled.div`
  ${maxWidth}
  margin: 0 auto;
`

export const Icon = styled.img`
  width: 50px;
  margin-right: 10px;
`;

export const AnimatedIcon = posed(Icon)({
  hoverable: true,
  pressable: false,
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