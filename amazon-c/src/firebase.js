import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDsfMbyatAfKPOq8zjHBBmqh62WvMi7oO8',
  authDomain: 'c-a1148.firebaseapp.com',
  projectId: 'c-a1148',
  storageBucket: 'c-a1148.appspot.com',
  messagingSenderId: '890637050057',
  appId: '1:890637050057:web:11075d05da143af3582d18',
  measurementId: 'G-492FRECTWY',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
