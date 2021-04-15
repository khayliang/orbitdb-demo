import React, { useEffect, useState, createContext } from "react"

import DEFAULT_IPFS_CONFIG from "../../configs/IPFSConfig"
import useIpfs from "../hooks/useIpfs"
import useOrbit from "../hooks/useOrbit"
import controller from "../controller"

const orbitContext = createContext(null)

const OrbitProvider = ({ config = DEFAULT_IPFS_CONFIG, ...props }) => {
  const [ipfs] = useIpfs(config)
  const { orbit, db, records } = useOrbit(ipfs, "test")
  const [value, setValue] = useState({
    ipfs: null,
    orbit: null,
    db: null,
    records: [],
    call: null,
  })

  const { Provider } = orbitContext
  useEffect(() => {
    if (ipfs && orbit && db && records) {
      setValue({ ...value, ipfs, orbit, db, records, call: controller(db) })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipfs, orbit, db, records])
  return <Provider value={value} {...props} />
}

export { OrbitProvider, orbitContext }
