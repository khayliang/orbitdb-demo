import React from "react"
import { Input, Card, Button } from "antd"
import styled from "styled-components"

const DataInput = styled(Input)`
  margin: 7px 5px;
`

const SubmitButton = styled(Button)`
  margin: 7px 5px;
`

export default () => {
  return (
    <Card>
      <h2>Enter your data here</h2>
      <DataInput placeholder="Key" />
      <DataInput placeholder="Value" />
      <SubmitButton type="primary" block>
        Submit
      </SubmitButton>
    </Card>
  )
}
