import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBzV-FdrBmCBglQTS8ROGE703wYLxEN1mk",
  authDomain: "todo-app-344c5.firebaseapp.com",
  databaseURL: "https://todo-app-344c5.firebaseio.com",
  storageBucket: "todo-app-344c5.appspot.com",
  messagingSenderId: "459467019364"
}
firebase.initializeApp(config)

const firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: 1.0
  },
  isRunning: true,
  user: {
    name: 'Chris',
    age: 37
  }
})

// create todos array
let todosRef = firebaseRef.child('todos')

// use child_add to listen for new todos print key value
todosRef.on('child_added', (snapshot) => {
  console.log('Todo added', snapshot.key, snapshot.val())
})

// add two todos to the array
todosRef.push({
  text: 'Do the laundry'
})

todosRef.push({
  text: 'Doing the most'
})
