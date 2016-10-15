import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router'
import * as actions from 'actions'
import configureStore from 'configureStore'
import Main from 'Main'
import Login from 'Login'
import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'

const store = configureStore()

store.dispatch(actions.startAddTodos())

// load foundation
$(document).foundation()

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Login} />
          <Route path="todos" component={TodoApp} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'))
