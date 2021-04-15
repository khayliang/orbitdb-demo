import React, { useContext } from "react"
import { Input, Card, Button, Form } from "antd"
import styled from "styled-components"

import { orbitContext } from "../../common/context/Orbit"

const DataInput = styled(Input)`
  margin: 7px 5px;
`

const SubmitButton = styled(Button)`
  margin: 7px 5px;
`

export default () => {
  const { call } = useContext(orbitContext)
  const submitData = async (values) => {
    await call({
      type: "ADD_NEW_DOCUMENT",
      payload: values,
    })
  }

  return (
    <Card>
      <h2>Enter your data here</h2>
      <Form onFinish={submitData}>
        <Form.Item name="key">
          <DataInput placeholder="Key" />
        </Form.Item>
        <Form.Item name="value">
          <DataInput placeholder="Value" />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" block htmlType="submit">
            Submit
          </SubmitButton>
        </Form.Item>
      </Form>
    </Card>
  )
}
