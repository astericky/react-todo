import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

import * as actions from 'actions'
import firebase, { firebaseRef } from 'app/firebase'

let createMockStore = configureMockStore([thunk])

describe('Actions', () => {

  it('should generate login action', () => {
    const action = {
      type: 'LOGIN',
      uid: 123
    }

    const res = actions.login(action.uid)
    expect(res).toEqual(action)
  })

  it('should generat logout action', () => {
    const action = {
      type: 'LOGOUT'
    }

    const res = actions.logout()
    expect(res).toEqual(action)
  })

  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    const res = actions.setSearchText(action.searchText)
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
    const res = actions.addTodo(action.todo)
    expect(res).toEqual(action)
  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'My todo item'

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
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
    const res = actions.addTodos(action.todos)
    expect(res).toEqual(action)
  })

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: { completed: false }
    }
    const res = actions.updateTodo(action.id, action.updates)
    expect(res).toEqual(action)
  })

  it('should toggle show completed', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const res = actions.toggleShowCompleted()
    expect(res).toEqual(action)
  })

  describe('Tests with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      let todosRef = firebaseRef.child('todos')

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push()

        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 1234
        })
      })
      .then(() => done())
      .catch(done)
    })

    afterEach((done) => {
      testTodoRef.remove().then(() => done())
    })

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({})
      const action = actions.startToggleTodo(testTodoRef.key, true)

      store.dispatch(action).then(() => {
        const mockActions = store.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        })
        expect(mockActions[0].updates).toInclude({
          completed: true
        })
        expect(mockActions[0].updates.completedAt).toExist()

        done()
      }, done)
    })

    it('should populate todos and  dispatch ADD_TODOS action', (done) => {
      const store = createMockStore({})
      const action = actions.startAddTodos()

      store.dispatch(action).then(() => {
        const mockActions = store.getActions()

        expect(mockActions[0].type).toEqual('ADD_TODOS')
        expect(mockActions[0].todos.length).toEqual(1)
        expect(mockActions[0].todos[0].text).toEqual('Something to do')

        done()
      }, done)
    })
  })
})
