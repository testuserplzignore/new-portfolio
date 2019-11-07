import styled from "styled-components"
import { common, breakpoint } from "style"

const {absoluteCentered, absoluteMiddle, absoluteVerticalAlign, responsiveSquares} = common;

export const DesktopContainer = styled.div`
  height: 0;
  padding-bottom: 66.67%;
  position: relative;
`
export const AbsoluteInnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
export const RelativeInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const DesktopBezel = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7D7D7D;
  border-radius: 0.5em;
`

export const DesktopCamera = styled.div`
  ${absoluteCentered}
  top: 2%;
  background-color: #000;
  width: 2%;
  height: 0;
  padding-bottom: 2%;
  border-radius: 100%;

  :after {
    ${absoluteMiddle}
    display: block;
    content: "";
    background-color: #212121;
    width: 35%;
    height: 0;
    padding-bottom: 35%;
    border-radius: 100%;
  }
`
export const DesktopScreen = styled.div`
  ${absoluteCentered}
  top: 6%;
  background-color: #fff;
  height: 81.25%;
  width: 91.67%;
  overflow: hidden;
`
export const BrowserBar = styled.div`
  position: relative;
  background-color: #474747;
  width: 100%;
  height: 7.7%;
`
export const BrowserButton = styled.div`
  ${absoluteVerticalAlign}
  ${responsiveSquares("2%")}
  background-color: ${props => props.color};
  border-radius: 100%;
  left: ${props => props.left};
`
export const AddressBar = styled.div`
  ${absoluteMiddle}
  display: block;
  width: 70%;
  height: 55%;
  background-color: #FFF;
  overflow-x: hidden;
`
export const Address = styled.a`
  text-decoration: none;
  color: black;
  vertical-align: top;
  margin-left: 1%;
  font-size: 4px;
  ${breakpoint.mobileM} {
    font-size: 5px;
  }
  ${breakpoint.tablet} {
    font-size: 8px;
  }
  ${breakpoint.laptop} {
    font-size: 12px;
  }
  ${breakpoint.desktop} {
    font-size: 13px;
  }
  ${breakpoint.desktopL} {
    font-size: 14px;
  }
`
export const BrowserWindow = styled.div`
  width: 100%;
  height: 92.3%
`

export const DestopButton = styled.div`
  ${responsiveSquares("4%")}
  ${absoluteCentered}
  bottom: 4%;
  background-color: #fff;
  border-radius: 100%;
`
export const DesktopButtonDetail = styled.div`
  ${absoluteMiddle}
  height: 60%;
  width: 60%;
  border: 1px solid darkgrey;
`