import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { hashHistory } from 'react-router'
import * as actions from 'actions'
import configureStore from 'configureStore'
import router from 'app/router/'
import firebase from 'app/firebase/'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid))
    store.dispatch(actions.startAddTodos())
    hashHistory.push('/todos')
  } else {
    store.dispatch(actions.logout())
    hashHistory.push('/')
  }
})

const store = configureStore()

// load foundation
$(document).foundation()

require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById('app'))
