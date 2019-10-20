import React from 'react'
import PropTypes from 'prop-types'
import MarkdownIt from 'markdown-it'

function Previewer({ content }) {
  function createMarkup() {
    const md = new MarkdownIt({
      breaks: true
    })
    return {
      __html: md.render(content)
    }
  }

  return (
    <>
      <label htmlFor="preview">Preview</label>
      <div id='preview' dangerouslySetInnerHTML={createMarkup()}></div>
    </>
  )
}

Previewer.propTypes = {
  content: PropTypes.string.isRequired
}

export default Previewer
