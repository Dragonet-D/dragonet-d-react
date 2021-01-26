import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './index.less'

const Markdown = () => {
  const [markdownCode, setMarkdownCode] = useState<string>('')

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

  return (
    <div>
      <div
        className={styles.edit}
        contentEditable
        onChange={e => setMarkdownCode(e.target.value)}
        name=""
        id=""
        cols="30"
        rows="10"
      />
      <ReactMarkdown renderers={renderers}>{markdownCode}</ReactMarkdown>
    </div>
  )
}

export default Markdown
