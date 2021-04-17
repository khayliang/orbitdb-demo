import React from "react"
import { Media, MediaContextProvider } from "../../common/context/Media"
import useOrbitDb from "../../common/hooks/useOrbitDb"

export default () => {
  const { records, call } = useOrbitDb("map")
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <h1>tablet</h1>
      </Media>
      <Media at="mobile">
        <h1>mobile</h1>
      </Media>
    </MediaContextProvider>
  )
}
