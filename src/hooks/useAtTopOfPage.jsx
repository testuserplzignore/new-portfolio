import React, { useState } from 'react';

const useAtTopOfPage = () => {
  const [visible, setVisible] = useState(true)
  const listenToScroll = () => {
    if (window.pageYOffset !== 0) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }
  window.addEventListener("scroll", listenToScroll)

  return visible
}

export default useAtTopOfPage