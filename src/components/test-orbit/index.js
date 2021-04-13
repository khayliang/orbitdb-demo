import React from "react"
import { Row, Col } from "antd"
import styled from "styled-components"
import KeyValueInput from "./KeyValueInput"
import DataTable from "./DataTable"

const PageContainer = styled.div`
  margin: 5px;
`

export default () => {
  return (
    <PageContainer>
      <Row>
        <Col span={12}>
          <KeyValueInput />
        </Col>
        <Col span={12}>
          <DataTable />
        </Col>
      </Row>
    </PageContainer>
  )
}
