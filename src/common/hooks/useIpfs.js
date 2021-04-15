import { useEffect, useState } from "react"
import IPFS from "ipfs"

const useIpfs = (config) => {
  const [node, setNode] = useState(null)

  useEffect(() => {
    const ipfsInit = async () => {
      console.debug("IPFS: Initializing IPFS node", config)
      const _ipfs = await IPFS.create(config)
      const peerId = (await _ipfs.id()).id
      console.debug("IPFS: Connected as", peerId)
      setNode(_ipfs)
    }

    if (!node) ipfsInit()

    return () => {
      if (node) {
        console.debug("IPFS: Stopping IPFS Node")
        node.stop()
      }
    }
  }, [node, config])

  return [node]
}

export default useIpfs
