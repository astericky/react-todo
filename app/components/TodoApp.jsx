import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      showCompleted: false,
      searchText: '',
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

  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted,
      searchtext: searchText.toLowerCase()
    })
  }

  handleAddTodo = (text) => {
    alert('new todo: ' + text)
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
