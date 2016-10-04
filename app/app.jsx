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
  toggleShowCompleted,
  toggleTodoItem
} from 'actions'
import configureStore from 'configureStore'
import TodoApp from 'TodoApp'

const store = configureStore()
store.subscribe(() => {
  console.log('New state', store.getState())
})

// load foundation
$(document).foundation()

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,
    document.getElementById('app'))
