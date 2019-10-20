import React, { useState } from 'react'

import Editor from './components/Editor'
import Previewer from './components/Previewer'

function App() {
  const defaultContent = `
  # Hello from Markdown
  ## This application was developed with React

  [freeCodeCamp](https://www.freecodecamp.org/)

  The application use hooks:\`const [document, setDocument] = useState("")\`

  \`\`\`
  const helloWorld = () => 'Hello world!'
  \`\`\`

  1. Item 1
  2. Item 2

  > Block quotes

  ![React logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/200px-React.svg.png)

  **Above there is an image**`
  const [document, setDocument] = useState(defaultContent)

  return (
    <>
      <Editor
        placeholder={document}
        onChange={({ target: { value } }) => setDocument(value)}
      />
      <Previewer content={document} />
    </>
  )
}

export default App
