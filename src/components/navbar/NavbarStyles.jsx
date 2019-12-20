import styled from "styled-components"
import posed from "react-pose"

export const NavContainer = styled.div`
  z-index: 1;
  background-color: #333; 
  position: fixed;
  top: 0; 
  width: 100%; 
`
export const AnimatedNavContainer = posed(NavContainer)({
  enter: {
    y: 0,
    opacity: 1,
    delayChildren: 200
  },
  exit: {
    y: -50,
    opacity: 0
  }
})

export const NavItem = styled.a`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
`
export const AnimatedNavItem = posed(NavItem)({
  hoverable: true,
  enter: {
    x: 0
  },
  exit: {
    x: -100
  },
  init: {
    color: "white",
    backgroundColor: "#333"
  },
  hover: {
    backgroundColor: "#ddd",
    color: "black"
  }
})