import React, { useContext, useState, useEffect } from "react"
import { Input, Card, Button, Row, Col } from "antd"
import styled from "styled-components"

import { orbitContext } from "../../common/context/Orbit"

const { Search } = Input

const ControlPanelCard = styled(Card)`
  width: 100%;
  margin: 5px 0px;
`
const DataInput = styled(Search)`
  margin: 7px 5px;
`

const GeneralButton = styled(Button)`
  margin: 7px 5px;
`

export default () => {
  const { ipfs } = useContext(orbitContext)
  const [myPeerId, setMyPeerId] = useState("")

  useEffect(() => {
    const getId = async () => {
      if (ipfs) {
        const { id } = await ipfs.id()
        setMyPeerId(id)
      }
    }
    getId()
  }, [ipfs])

  const onConnect = async (addr) => {
    const protocol = "/p2p-circuit/ipfs/"
    try {
      await ipfs.swarm.connect(protocol + addr)
    } catch (e) {
      console.error("IPFS: Error connecting to peer", e)
    }
  }

  const onGetPeers = async () => {
    const peers = await ipfs.swarm.peers()
    console.debug("IPFS: List of peers", peers)
  }
  return (
    <ControlPanelCard>
      <h2>Peer Control Panel</h2>
      <h3>Peer address: {myPeerId}</h3>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <h3>Connect to peer</h3>
            <DataInput
              placeholder="Multiaddress"
              onSearch={onConnect}
              enterButton="Connect"
            />
            <GeneralButton type="primary" block onClick={onGetPeers}>
              Get peers
            </GeneralButton>
          </Card>
        </Col>
        <Col span={8} />
        <Col span={8} />
      </Row>
    </ControlPanelCard>
  )
}
