import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from '@material-ui/core'
import { useRequest } from 'umi'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { test } from './service'
import styles from './index.less'

const recast = require('recast')

const Markdown = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    if (count1 === 12) {
      setCount1(1)
    }
  })

  useEffect(() => {
    if (count2 === 12) {
      setCount2(1)
    }
  })

  useRequest(test)

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter style={dark} language={language} children={value} />
      )
    },
  }

  const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

  const code = `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `

  console.log(recast.parse(code))
  return (
    <div>
      <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>
      <div>count1{count1}</div>
      <Button color="primary" onClick={() => setCount1(12)}>
        count1
      </Button>
      <div>count2{count2}</div>
      <Button onClick={() => setCount2(12)}>count2</Button>

      <br />

      <button onClick={e => console.log(e, e.nativeEvent)}>
        test event react
      </button>
    </div>
  )
}

export default Markdown
