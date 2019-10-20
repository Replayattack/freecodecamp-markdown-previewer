import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

it('app render with default content', () => {
  const { container, getByLabelText } = render(<App />)

  const editor = getByLabelText('Editor')
  expect(editor).toBeInTheDocument()
  expect(editor).not.toBeEmpty()

  const preview = container.querySelector('#preview')
  expect(preview).toBeInTheDocument()
  expect(preview).toContainHTML('<h1>Hello from Markdown</h1>')
  expect(preview).toContainHTML(
    '<h2>This application was developed with React</h2>'
  )
  expect(preview).toContainHTML(
    '<a href="https://www.freecodecamp.org/">freeCodeCamp</a>'
  )
  expect(preview).toContainHTML(
    '<p>The application use hooks:<code>const [document, setDocument] = useState("")</code></p>'
  )

  const code = preview.querySelector('pre > code')
  expect(code).toHaveTextContent("const helloWorld = () => 'Hello world!'")

  expect(preview).toContainHTML('<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n</ol>')
  expect(preview).toContainHTML(
    '<blockquote>\n<p>Block quotes</p>\n</blockquote>'
  )

  const image = preview.querySelector('img')
  expect(image).toHaveAttribute('alt')
  expect(image).toHaveAttribute('src')
  expect(image.alt).toBe('React logo')
  expect(image.src).toBe(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/200px-React.svg.png'
  )

  expect(preview).toContainHTML(
    '<p><strong>Above there is an image</strong></p>'
  )
})

test('app handle user input and render GitHub Flavored Markdown', () => {
  const { container, getByLabelText } = render(<App />)

  const editor = getByLabelText('Editor')
  const previewer = container.querySelector('#preview')
  fireEvent.change(editor, { target: { value: '' } })
  expect(editor).toBeEmpty()
  expect(previewer).toBeEmpty()

  fireEvent.change(editor, {
    target: {
      value: `\
  | First Header   | Second Header  |
  | -------------- | -------------- |
  | Content Cell 1 | Content Cell 2 |`
    }
  })

  expect(editor).not.toBeEmpty()
  expect(preview).not.toBeEmpty()
  expect(preview).toContainHTML(
    '<thead>\n<tr>\n<th>First Header</th>\n<th>Second Header</th>\n</tr>\n</thead>'
  )
  expect(preview).toContainHTML(
    '<tbody>\n<tr>\n<td>Content Cell 1</td>\n<td>Content Cell 2</td>\n</tr>\n</tbody>'
  )
})
