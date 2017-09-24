import * as firebase from 'firebase';
let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyAZMPlGVaHpAkZX_7TgS-uyaVmSTLOf-2s",
    authDomain: "react-todo-learning.firebaseapp.com",
    databaseURL: "https://react-todo-learning.firebaseio.com",
    projectId: "react-todo-learning",
    storageBucket: "react-todo-learning.appspot.com",
    messagingSenderId: "448255549646"
  };
  firebase.initializeApp(config);
  database = firebase.database();
}
