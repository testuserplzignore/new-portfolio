import styled from "styled-components/macro"
import Desktop from "./Desktop"

const maxWidth = "max-width: 800px;"


export const StyledDesktop = styled(Desktop)`
  ${maxWidth};
  margin: 0 auto;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`

export const MobileProjectLayout = styled.div`
  margin: 10% auto 0 auto;
  padding: 5%;
`

export const MobileProjectTitle = styled.h2`
  ${maxWidth}
  margin: 0 auto 10% auto;
  font-size: 28px;
`

export const MobileProjectDescription = styled.p`
  ${maxWidth};
  margin: 10% auto 0 auto;
  text-indent: 36px;
  font-size: 18px;
  line-height: 24px;
`