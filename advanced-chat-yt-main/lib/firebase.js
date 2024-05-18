// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDy7GOjcKm_9oe5RaQ4N23rtH3MAsOYb2g",
  authDomain: "deiloriamkeddy.firebaseapp.com",
  databaseURL: "https://deiloriamkeddy-default-rtdb.firebaseio.com",
  projectId: "deiloriamkeddy",
  storageBucket: "deiloriamkeddy.appspot.com",
  messagingSenderId: "797852239437",
  appId: "1:797852239437:web:13002ed4ca0b2caacd3e04",
  measurementId: "G-VQXL92G6JQ"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };