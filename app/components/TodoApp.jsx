import React from 'react'
import uuid from 'uuid'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'


class TodoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos)
  }

  handleToggle = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({ todos: updatedTodos })
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
          text,
          completed: false
        }
      ]
    })
  }

  render () {
    let { todos, showCompleted, searchText } = this.state
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
