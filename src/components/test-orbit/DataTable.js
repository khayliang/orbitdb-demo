import React from "react"
import { Table, Card } from "antd"
import styled from "styled-components"

const TableCard = styled(Card)`
  height: 100%;
`

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

export default ({ records }) => {
  return (
    <>
      <TableCard>
        <Table
          columns={columns}
          dataSource={records}
          scroll={{ y: 150 }}
          pagination={false}
        />
      </TableCard>
    </>
  )
}
