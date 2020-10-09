import React, { useEffect } from 'react'
import { NavLink, useRequest } from 'umi'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { getList } from './service'

const Note = () => {
  const { data } = useRequest(getList, {
    initialData: [],
    formatResult: res => res.data,
  })

  console.log(data)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>标题</TableCell>
            <TableCell>链接</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(i => (
            <TableRow key={i.id}>
              <TableCell component="th" scope="row">
                {i.title}
              </TableCell>
              <TableCell component="th" scope="row">
                <NavLink to={i.url}>{i.url}</NavLink>
              </TableCell>
              <TableCell>
                <Button color="primary">编辑</Button>
                <Button color="secondary">删除</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Note
