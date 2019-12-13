import React from 'react'
import { FooterContainer, Copyright } from './footerStyles'

const year = new Date().getFullYear()

export default function footer() {
  
  return (
    <FooterContainer>
      <Copyright>Copyright &copy; {year}, Robert Morrissey</Copyright>
    </FooterContainer>
  )
}
