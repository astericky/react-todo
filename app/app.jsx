import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router'
import {
  setSearchText,
  addTodo,
  addTodos,
  toggleShowCompleted,
  toggleTodoItem
} from 'actions'
import configureStore from 'configureStore'
import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'



const store = configureStore()
store.subscribe(() => {
  let state = store.getState()
  console.log('New state', store.getState())
  TodoAPI.setTodos(state.todos)
})

let initialTodos = TodoAPI.getTodos()
store.dispatch(addTodos(initialTodos))

// load foundation
$(document).foundation()

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,
    document.getElementById('app'))
