import React, { useState } from 'react'
import { AnimatedHireMeButton, ModalBackground } from './HireMeStyles';
import { PoseGroup } from "react-pose"
import useAtTopOfPage from '../../hooks/useAtTopOfPage';

export default function HireMe() {
  const [modalActive, setModalActive] = useState(false)
  const visible = !useAtTopOfPage() 
  
  return (
    <PoseGroup>
      {visible &&
        <AnimatedHireMeButton key="I AM SPECIAL" onClick={()=>setModalActive(true)}>
          HIRE ME
        </AnimatedHireMeButton>
      }

      {modalActive && 
          <ModalBackground key="I AM SPECIAL TREE" onClick={()=>setModalActive(false)}/>
      }
    </PoseGroup>
  )
}
