import React from 'react'
import PropTypes from 'prop-types'

function Editor({ placeholder, onChange }) {
  return (
    <>
      <label htmlFor='editor'>Editor</label>
      <textarea
        id='editor'
        cols='30'
        rows='10'
        value={placeholder}
        onChange={onChange}></textarea>
    </>
  )
}

Editor.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor
