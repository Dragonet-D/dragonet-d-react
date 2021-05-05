import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from '@material-ui/core'
import { useRequest } from 'umi'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
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

  const [values, setValues] = useState(null)

  console.log(recast.parse(code))

  const handleChange = e => {
    setValues(e)
    console.log(e.toHTML())
  }

  useEffect(() => {
    setTimeout(() => {
      setValues(
        BraftEditor.createEditorState(`
      <ul>
      <li>qweqeqweqe</li>
      <li>qweqdadsadqew</li>
      </ul>
      <p>qweqwqwee123</p>
    `),
      )
    }, 1000)
  }, [])

  return (
    <div>
      <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>
      <div>count1{count1} ss</div>
      <Button color="primary" onClick={() => setCount1(12)}>
        count1
      </Button>
      <div>count2{count2}</div>
      <Button onClick={() => setCount2(12)}>count2</Button>
      <br />
      <button onClick={e => console.log(e, e.nativeEvent)}>
        test event react
      </button>
      <BraftEditor value={values} onChange={handleChange} />
    </div>
  )
}

export default Markdown;
