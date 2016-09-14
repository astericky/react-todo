import React from 'react'
import TodoList from 'TodoList'

class TodoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Write the react'
        },
        {
          id: 4,
          text: 'Build the app'
        }
      ]
    }
  }

  render () {
    let { todos } = this.state

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
}

export default TodoApp;
