import firebase from 'firebase'

try {
  const config = {
    apiKey: "AIzaSyBzV-FdrBmCBglQTS8ROGE703wYLxEN1mk",
    authDomain: "todo-app-344c5.firebaseapp.com",
    databaseURL: "https://todo-app-344c5.firebaseio.com",
    storageBucket: "todo-app-344c5.appspot.com",
    messagingSenderId: "459467019364"
  }
  firebase.initializeApp(config)
} catch(e) {

}



export const firebaseRef = firebase.database().ref()
export default firebase
