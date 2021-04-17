import { useEffect, useState } from "react"
import IPFS from "ipfs"
import IPFSClient from "ipfs-http-client"

const client = process.env.REACT_APP_CLIENT === "true"
const useIpfs = (config) => {
  const [node, setNode] = useState(null)

  useEffect(() => {
    const handlePeerConnected = (peer) => {
      console.debug("IPFS: Peer connected", peer)
    }
    const handlePeerDiscovery = (peer) => {
      console.debug("IPFS: Peer discovered", peer)
    }
    const ipfsInit = async () => {
      let _ipfs = null
      if (client) {
        console.debug("IPFS: Connecting to IPFS node")
        _ipfs = await IPFSClient("http://localhost:5001/api/v0")
      } else {
        console.debug("IPFS: Initializing IPFS node", config)
        _ipfs = await IPFS.create(config)
      }
      const peerId = await _ipfs.id()
      console.debug("IPFS: Connected as", peerId)
      if (!client) _ipfs.libp2p.on("peer:discovery", handlePeerDiscovery)
      if (!client)
        _ipfs.libp2p.connectionManager.on("peer:connect", handlePeerConnected)
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
