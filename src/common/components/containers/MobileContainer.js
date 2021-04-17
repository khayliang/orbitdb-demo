import React from "react"

import { Media } from "../../context/Media"

const MobileContainer = ({ children }) => {
  return <Media at="mobile">{children}</Media>
}

export default MobileContainer
