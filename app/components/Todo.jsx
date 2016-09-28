import React, { PropTypes } from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { id, text, completed } = this.props
    return (
      <div onClick={() => {
          this.props.onToggle(id)
        }}>
        <input type="checkbox" defaultChecked={completed}/>
        { text }
      </div>
    )
  }
}

export default Todo
