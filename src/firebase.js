import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDFW6SDlqeoGI881Q9zO5repnnPZDjpY1U",
    authDomain: "team-match-33f32.firebaseapp.com",
    databaseURL: "https://team-match-33f32.firebaseio.com",
    projectId: "team-match-33f32",
    storageBucket: "team-match-33f32.appspot.com",
    messagingSenderId: "217712429666"
  };
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');

  export {
      firebase,
      firebaseMatches
  }
