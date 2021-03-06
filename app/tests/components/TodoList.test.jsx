import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import configureStore from 'configureStore'
import ConnectedTodoList, { TodoList } from 'TodoList'
import ConnectedTodo, { Todo } from 'Todo'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each Todo item', () => {
    const todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }]
    const store = configureStore({
      todos
    })
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)

    expect(todosComponents.length).toBe(todos.length)
  })

  it('should render empty message if no todos', () => {
    const todos = []
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    const $el = $(ReactDOM.findDOMNode(todoList))

    expect($el.find('.container__message').length).toBe(1)
  })
})
