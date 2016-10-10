import expect from 'expect'
import df from 'deep-freeze-strict'
import {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
} from 'reducers'



describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      const res = searchTextReducer(df(''), df(action))
      expect(res).toEqual(action.searchText)
    })
  })
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      const res = showCompletedReducer(df(false), df(action))
      expect(res).toEqual(true)
    })
  })
  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Walk the dog',
          completed: false,
          createdAt: 92384275
        }
      }
      const res = todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })

    it('should update todo', () => {
      const todos = [{
        id: 123,
        text: 'Walk the dog',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]
      const updates = {
        completed: false,
        completedAt: null
      }
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }
      const res = todosReducer(df(todos), df(action))
      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todos[0].text)
    })

    it('should add existing todos', () => {
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
      const res = todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })
  })
})
