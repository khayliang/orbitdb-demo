import React from "react"
import { Table, Input } from "antd"
import styled from "styled-components"


const columns = [
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
]

export default ({ data = [{ key: "hey", value: "test" }] }) => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
