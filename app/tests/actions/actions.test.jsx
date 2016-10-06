import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

import {
  setSearchText,
  addTodo,
  startAddTodo,
  addTodos,
  toggleShowCompleted,
  toggleTodo } from 'actions'

let createMockStore = configureMockStore([thunk])

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    const res = setSearchText(action.searchText)
    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 123,
        text: 'Thing to do',
        completed: false,
        createdAt: 12345
      }
    }
    const res = addTodo(action.todo)
    expect(res).toEqual(action)
  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'My todo item'

    store.dispatch(startAddTodo(todoText)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
  })

  it('should generate add todos action object', () => {
    const todos = [{
      id: 111,
      text: 'anything',
      createdAt: 33000,
      completed: false,
      completedAt: undefined
    }]
    const action = {
      type: 'ADD_TODOS', todos
    }
    const res = addTodos(action.todos)
    expect(res).toEqual(action)
  })

  it('should toggle show completed', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const res = toggleShowCompleted()
    expect(res).toEqual(action)
  })

  it('should toggle todo item', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: '123'
    }
    const res = toggleTodo(action.id)
    expect(res).toEqual(action)
  })
})
