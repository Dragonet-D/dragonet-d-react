import React, { useState } from 'react'
import { NavLink, useRequest } from 'umi'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { getList, addItem, del } from './service'
import styles from './index.scss'

const Note = () => {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')

  const { data, run } = useRequest(getList, {
    initialData: [],
    formatResult: res => res.data || [],
  })

  // 添加
  const { run: addItemRun } = useRequest(addItem, {
    manual: true,
    onSuccess: res => {
      run()
      setLink('')
      setTitle('')
    },
  })

  // 删除
  const { run: delRun } = useRequest(del, {
    manual: true,
    onSuccess: res => {
      run()
    },
  })

  const handleAdd = () => {
    addItemRun({
      title,
      url: link,
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          label="标题"
        />
        <TextField
          value={link}
          onChange={e => setLink(e.target.value)}
          className={styles.link}
          label="链接"
        />
        <Button
          disabled={!title || !link}
          onClick={handleAdd}
          color="primary"
          variant="contained"
        >
          确定
        </Button>
      </div>
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
            {data.map((i: any) => (
              <TableRow key={i.id}>
                <TableCell component="th" scope="row">
                  {i.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  <NavLink to={i.url}>{i.url}</NavLink>
                </TableCell>
                <TableCell>
                  <Button color="primary">编辑</Button>
                  <Button
                    onClick={() => delRun({ id: i.id })}
                    color="secondary"
                  >
                    删除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Note
