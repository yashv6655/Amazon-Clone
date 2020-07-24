import firebase from "firebase";
require("dotenv").config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-a3e08.firebaseapp.com",
  databaseURL: "https://clone-a3e08.firebaseio.com",
  projectId: "clone-a3e08",
  storageBucket: "clone-a3e08.appspot.com",
  messagingSenderId: "992178807399",
  appId: "1:992178807399:web:ec0ab5812efdf123a92ac2",
  measurementId: "G-DVMMK9Q48V",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
