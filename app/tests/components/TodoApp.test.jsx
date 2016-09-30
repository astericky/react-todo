import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'
import moment from 'moment'

import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'testText'
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText)
    expect(todoApp.state.todos[0].text).toBe(todoText)
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  })

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
    todoApp.setState({ todos: [todoData] })
    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false)
    // call handleToggle 11
    todoApp.handleToggle(11)
    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true)
    // Expect completed at to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  })

  // Test that when toggle completed from true to false completedat gets removed
  it('should toggle completed from true to false and complatedAt gets removed', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: moment().unix(),
      completedAt: moment().unix()
    }
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
    todoApp.setState({ todos: [todoData] })
    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(true)
    // call handleToggle 11
    todoApp.handleToggle(11)
    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false)
    // Expect completed at to be a undefined
    expect(todoApp.state.todos[0].completedAt).toBe(undefined)
  })
})
