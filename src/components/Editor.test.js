import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Editor from './Editor'

test('editor renders and handle user input', () => {
  const placeholder = `\
  # Hello world! from Markdown
  `
  const handleChange = jest.fn()

  const { container, getByLabelText } = render(
    <Editor placeholder={placeholder} onChange={handleChange} />
  )
  const element = getByLabelText('Editor')
  const editor = container.querySelector('textarea')

  expect(editor.id).toBe('editor')
  expect(element).toBeInTheDocument()
  expect(element).toHaveAttribute('id')
  expect(element).toHaveValue(placeholder)

  fireEvent.change(element, { target: { value: 'Hello world!' } })
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(element).toHaveTextContent('Hello world!')
})
