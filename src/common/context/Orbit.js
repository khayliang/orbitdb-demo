import React, { useEffect, useState, createContext } from "react"

import DEFAULT_IPFS_CONFIG from "../../configs/IPFSConfig"
import useIpfs from "../hooks/useIpfs"
import useOrbit from "../hooks/useOrbit"

const orbitContext = createContext(null)

const OrbitProvider = ({ config = DEFAULT_IPFS_CONFIG, ...props }) => {
  const [ipfs] = useIpfs(config)
  const [orbit] = useOrbit(ipfs)
  const [value, setValue] = useState({
    ipfs: null,
    orbit: null,
  })

  const { Provider } = orbitContext
  useEffect(() => {
    if (ipfs && orbit) {
      setValue({ ...value, ipfs, orbit })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipfs, orbit])

  const contextValues = {
    ...value,
  }

  return <Provider value={contextValues} {...props} />
}

export { OrbitProvider, orbitContext }
