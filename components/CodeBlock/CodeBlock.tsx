import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface Props {
  language: string
  value: string
}

const CodeBlock = ({ language, value }: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      wrapLines={true}
      showLineNumbers={true}
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
