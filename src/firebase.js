import firebase from "firebase";
require("dotenv").config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-a3e08.firebaseapp.com",
  databaseURL: process.env.DATABASE_URL,
  projectId: "clone-a3e08",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
