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
    <div id='preview' dangerouslySetInnerHTML={createMarkup()}></div>
  )
}

Previewer.propTypes = {
  content: PropTypes.string.isRequired
}

export default Previewer
