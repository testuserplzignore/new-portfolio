import styled from "styled-components"
import posed from "react-pose"

export const NavContainer = styled.div`
  z-index: 2;
  background-color: #333; 
  position: fixed;
  top: 0; 
  width: 100%; 
`
export const AnimatedNavContainer = posed(NavContainer)({
  enter: {
    opacity: 1
  },
  exit: {
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
  :hover {
    
  }
`
export const AnimatedNavItem = posed(NavItem)({
  hoverable: true,
  init: {
    color: "white",
    backgroundColor: "#333"
  },
  hover: {
    backgroundColor: "#ddd",
    color: "black"
  }
})