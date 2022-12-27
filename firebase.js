// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSwMlI1dIxY1HNLcuhmF3osqctUJivEDA",
  authDomain: "clone-15c61.firebaseapp.com",
  projectId: "clone-15c61",
  storageBucket: "clone-15c61.appspot.com",
  messagingSenderId: "551988322037",
  appId: "1:551988322037:web:1cba57f73e9ad583762fbc",
  measurementId: "G-SK97TJYG4X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth};
