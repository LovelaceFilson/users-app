import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBSVZ5DohaTMk5w6F8PGrTqVrZnUinpQnU",
    authDomain: "userapp-cd83b.firebaseapp.com",
    databaseURL: "https://userapp-cd83b.firebaseio.com",
    projectId: "userapp-cd83b",
    storageBucket: "userapp-cd83b.appspot.com",
    messagingSenderId: "101409482195",
    appId: "1:101409482195:web:825001951779e3173f3b26"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;