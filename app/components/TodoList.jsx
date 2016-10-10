import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

export class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { showCompleted, searchText, todos } = this.props
    const renderTodos = () => {
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      return filteredTodos.map(todo => <Todo key={todo.id} {...todo} />)
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state
  }
)(TodoList)
