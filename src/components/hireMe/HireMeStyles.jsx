import styled from "styled-components/macro"
import posed from "react-pose"

export const HireMeButton = styled.button`
  background-color: white;
  text-decoration: none;
  position: fixed;
  padding: 16px 32px;
	bottom: 8%;
  cursor: pointer;
	right: 10%;
	border-radius: 5px;
	text-align: center;
	box-shadow: 2px 2px 3px #999;
  
  :focus, :active {
    border-style: solid;
    outline: none;
  }
`

export const AnimatedHireMeButton = posed(HireMeButton)({
  hoverable: true,
  pressable: true,
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0
  },
  init: {
    backgroundColor: "#fff",
    scale: 1,
    boxShadow: "2px 2px 3px #999"
  },
  hover: {
    backgroundColor: "#E0ECFF",
    scale: 1.2,
    boxShadow: "4px 4px 5px #999"
  },
  press: {
    scale: 1.1,
    boxShadow: "3px 3px 4px #999"
  }
})

export const ModalBackground = posed(styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 2;
`)({
  enter: {
    opacity: .3,
  },
  exit: {
    opacity: 0,
  }
})