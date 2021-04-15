import React, { useContext } from "react"
import { Table, Card } from "antd"
import styled from "styled-components"
import { orbitContext } from "../../common/context/Orbit"

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

export default () => {
  const { records } = useContext(orbitContext)
  return (
    <>
      <TableCard>
        <Table columns={columns} dataSource={records} />
      </TableCard>
    </>
  )
}
