import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router'

import Main from 'Main'
import Login from 'Login'
import TodoApp from 'TodoApp'
import firebase from 'app/firebase/'

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/')
  }
  next()
}

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos')
  }
  next()
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
      <Route path="todos" component={TodoApp} onEnter={requireLogin} />
    </Route>
  </Router>
)
