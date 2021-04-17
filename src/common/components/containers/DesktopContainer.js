import React from "react"

import { Media } from "../../context/Media"

const DesktopContainer = ({ children }) => {
  return <Media greaterThanOrEqual="tablet">{children}</Media>
}

export default DesktopContainer
