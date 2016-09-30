import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each Todo item', () => {
    const todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }]
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todosComponents.length).toBe(todos.length)
  })

  it('should render empty message if no todos', () => {
    const todos = []
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    const $el = $(ReactDOM.findDOMNode(todoList))

    expect($el.find('.container__message').length).toBe(1)
  })
})
