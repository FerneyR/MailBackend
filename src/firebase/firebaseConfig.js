const {initializeApp} = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTxCulNqXhZEKKfSxtN1U0NC-tMl__3pQ",
  authDomain: "postoffice-2023.firebaseapp.com",
  projectId: "postoffice-2023",
  storageBucket: "postoffice-2023.appspot.com",
  messagingSenderId: "254969453889",
  appId: "1:254969453889:web:f5363b5a8f3c0dffe6d5c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

module.exports = { app, db, auth };