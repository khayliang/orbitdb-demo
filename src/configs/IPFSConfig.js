const DEFAULT_IPFS_CONFIG = {
  relay: {
    enabled: true,
    hop: {
      enabled: true,
      active: true,
    },
  },
  repo: "./ipfs",
  EXPERIMENTAL: { pubsub: true },
  config: {
    Bootstrap: [],
    Addresses: {
      Swarm: [
        "/ip4/127.0.0.1/tcp/13579/ws/p2p-webrtc-star/",
        "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWNBRN4vNJPmco9dnDVqQnyySekU8ghtpu5UexesBnUxPo",
      ],
    },
  },
}

export default DEFAULT_IPFS_CONFIG
