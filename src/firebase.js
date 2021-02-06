import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3H68Xz0OMLBPRH2qyCRf06Rt6fhIgRME",
    authDomain: "linkedin-8789e.firebaseapp.com",
    projectId: "linkedin-8789e",
    storageBucket: "linkedin-8789e.appspot.com",
    messagingSenderId: "296137860251",
    appId: "1:296137860251:web:e7cea56efdb72e4967523e",
    measurementId: "G-18EG14BXB6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };