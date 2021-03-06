import * as redux from 'redux'
import thunk from 'redux-thunk'
import {
  searchTextReducer,
  showCompletedReducer,
  todosReducer,
  authReducer
} from 'reducers'

export default (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  })

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
