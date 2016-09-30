import React, { PropTypes } from 'react'
import Todo from 'Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { todos } = this.props
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      return todos.map(todo => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>)
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default TodoList
