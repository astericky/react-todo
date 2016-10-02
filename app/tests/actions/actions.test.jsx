import expect from 'expect'
import {
  setSearchText,
  addTodo,
  toggleShowCompleted,
  toggleTodoItem } from 'actions'

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
      text: 'Thing to do'
    }
    const res = addTodo(action.text)
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
      type: 'TOGGLE_TODO_ITEM',
      id: '123'
    }
    const res = toggleTodoItem(action.id)
    expect(res).toEqual(action)
  })
})
