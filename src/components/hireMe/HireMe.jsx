import React, { useState, useEffect } from 'react'
import { AnimatedHireMeButton } from './HireMeStyles';
import HireMeModal from "./HireMeModal"
import { PoseGroup } from "react-pose"
import {useAtTopOfPage} from '../../hooks';
import lockScroll from "react-lock-scroll"

import uuidv4 from "uuid/v4";
const keys = {
  modal: uuidv4(),
  button: uuidv4()
};

export default function HireMe() {
  const [modalActive, setModalActive] = useState(false)
  const visible = !useAtTopOfPage()

  lockScroll(modalActive)

  return (
    <>
    <PoseGroup>
      {visible &&
        <AnimatedHireMeButton key={keys.button} onClick={()=>setModalActive(true)}>
          HIRE ME
        </AnimatedHireMeButton>
      }
    </PoseGroup>
    <HireMeModal
      key={keys.modal}
      active={modalActive}
      onClickClose={(e) => { setModalActive(false) }}
    />
    </>
  )
}
