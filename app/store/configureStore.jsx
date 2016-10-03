import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose } from 'redux'
import {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
} from 'reducers'

export default (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })

  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
