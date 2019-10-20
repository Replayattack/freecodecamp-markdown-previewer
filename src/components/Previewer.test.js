import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Previewer from './Previewer'

test('previewer renders and display the rich text content', () => {
  const content = '# Hello world! from Markdown'

  const { container } = render(
    <Previewer content={content} />
  )
  const previewer = container.querySelector('div')

  expect(previewer).toBeInTheDocument()
  expect(previewer).toHaveAttribute('id')
  expect(previewer.id).toBe('preview')
  expect(previewer).toContainHTML('<h1>Hello world! from Markdown</h1>')
})
