import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Previewer from './Previewer'

test('previewer renders and display the rich text content', () => {
  const content = '# Hello world! from Markdown'

  const { container, getByTestId } = render(
    <Previewer data-testid='previewer' content={content} />
  )
  const element = getByTestId('previewer')

  expect(element).toBeInTheDocument()
  expect(element).toHaveAttribute('id')
  expect(container.firstChild.id).toBe('preview')
  expect(element).toContainHTML('<h1>Hello world! from Markdown</h1>')
})
