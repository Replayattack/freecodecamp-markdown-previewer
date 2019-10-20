import React from 'react'
import PropTypes from 'prop-types'
import MarkdownIt from 'markdown-it'

function Previewer({ content, ...props }) {
  function createMarkup() {
    const md = new MarkdownIt({
      breaks: true
    })
    return {
      __html: md.render(content)
    }
  }

  return (
    <div id='preview' dangerouslySetInnerHTML={createMarkup()} {...props}></div>
  )
}

Previewer.propTypes = {
  content: PropTypes.string.isRequired
}

export default Previewer
