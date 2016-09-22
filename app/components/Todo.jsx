import React, { PropTypes } from 'react'

const Todo = (props) => {
  let { id, text } = props
  return (
    <div>
      { id }. { text }
    </div>
  )
}

export default Todo
