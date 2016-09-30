import React, { PropTypes } from 'react'
import moment from 'moment'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { id, text, completed, createdAt, completedAt } = this.props
    let renderDate = () => {
      let message = 'Created'
      let timestamp = createdAt

      if (completed) {
        message = 'Completed'
        timestamp = completedAt
      }

      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`
    }
    return (
      <div onClick={() => {
          this.props.onToggle(id)
        }}>
        <input type="checkbox" defaultChecked={completed}/>
        <p>{ text }</p>
        <p>{ renderDate() }</p>
      </div>
    )
  }
}

export default Todo
