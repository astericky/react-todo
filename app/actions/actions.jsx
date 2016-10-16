import moment from 'moment'
import firebase, { firebaseRef, githubProvider } from 'app/firebase/index'

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT', searchText
  }
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO', todo
  }
}

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    const uid = getState().auth.uid
    const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo)
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  }
}

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const todoRef = firebaseRef.child(`users/${uid}/todos`)
    return todoRef.once('value').then((snapshot) => {
      const todos = snapshot.val() || {}
      let parsedTodos = []

      for (var todo in todos) {
        parsedTodos.push({
          id: todo,
          ...todos[todo]
        })
      }

      dispatch(addTodos(parsedTodos))
    }, (error) => {
      console.log("The read failed: " + error.code);
    })
  }
}

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO', id, updates
  }
}

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`)
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    }
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates))
    })
  }
}

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  }
}

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked!', result)
    }, (error) => {
      console.log('Unable to auth', error)
    })
  }
}

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!')
    }, () => {

    })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
