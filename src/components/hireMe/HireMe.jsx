import React from 'react'
import { AnimatedHireMeButton } from './HireMeStyles';
import { PoseGroup } from "react-pose"
import useAtTopOfPage from '../../hooks/useAtTopOfPage';

export default function HireMe() {
  const visible = useAtTopOfPage() ? false : true
  
  return (
    <PoseGroup>
      {visible &&
        <AnimatedHireMeButton key="I AM SPECIAL">
          HIRE ME
        </AnimatedHireMeButton>
      }
    </PoseGroup>
  )
}
