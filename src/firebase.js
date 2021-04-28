import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCzI9oHxh-_tCBr9qk_kg9xlEIfrCxhEVA",
    authDomain: "twitter-clone-9b8c1.firebaseapp.com",
    databaseUrl: "https://twitter-clone-9b8c1-default-rtdb.firebaseio.com/",
    projectId: "twitter-clone-9b8c1",
    storageBucket: "twitter-clone-9b8c1.appspot.com",
    messagingSenderId: "995472071033",
    appId: "1:995472071033:web:3337b0c13b3cd1357cb7a8",
    measurementId: "G-22RERNETV5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;