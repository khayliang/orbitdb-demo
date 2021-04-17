import React from "react"
import { Row, Col } from "antd"
import styled from "styled-components"

import useOrbitDb from "../../common/hooks/useOrbitDb"

import KeyValueInput from "./KeyValueInput"
import DataTable from "./DataTable"
import PeerControl from "./PeerControl"

const PageContainer = styled.div`
  margin: 5px;
`

export default () => {
  const { records, call } = useOrbitDb("testDb")
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={12}>
          <KeyValueInput call={call} />
        </Col>
        <Col span={12}>
          <DataTable records={records} />
        </Col>
      </Row>
      <Row>
        <PeerControl call={call} />
      </Row>
    </PageContainer>
  )
}
