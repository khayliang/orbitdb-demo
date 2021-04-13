import React, { useEffect, useState, createContext } from "react"

import DEFAULT_IPFS_CONFIG from "../../configs/IPFSConfig"
import useIpfs from "../hooks/useIpfs"
import useOrbit from "../hooks/useOrbit"

const orbitContext = createContext(null)

const OrbitProvider = ({ config = DEFAULT_IPFS_CONFIG, ...props }) => {
  const [ipfs] = useIpfs(config)
  const [orbit] = useOrbit(ipfs)
  const [value, setValue] = useState(null)
  const { Provider } = orbitContext
  useEffect(() => {
    if (ipfs && orbit) {
      setValue(orbit)
    }
  }, [ipfs, orbit])
  return <Provider value={value} {...props} />
}

export { OrbitProvider, orbitContext }
