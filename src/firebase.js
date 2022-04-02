import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaeq9MNdjzd38rA9f2sggWNWB_K9DDxC8",
  authDomain: "eshop-373b3.firebaseapp.com",
  databaseURL: "https://eshop-373b3-default-rtdb.firebaseio.com",
  projectId: "eshop-373b3",
  storageBucket: "eshop-373b3.appspot.com",
  messagingSenderId: "330168635256",
  appId: "1:330168635256:web:92044beb3e9f7646a0c28d",
  measurementId: "G-KJVHC0S1TY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
