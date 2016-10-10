import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import * as actions from 'actions'
import { Todo } from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should dispatch UPDATE_TODO action on click', () => {
    let todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true,
    }
    let action = actions.startToggleTodo(todoData.id, !todoData.completed)
    let spy = expect.createSpy()
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(todo))
    TestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith(action)
  })
})
