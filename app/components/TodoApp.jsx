import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'uuid'

class TodoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Write the react'
        },
        {
          id: uuid(),
          text: 'Build the app'
        }
      ]
    }
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted,
      searchtext: searchText.toLowerCase()
    })
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    })
  }

  render () {
    let { todos } = this.state

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
