
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPPH_1uT5QiRfLy3yEgSMaF79oTLbHTj4",
  authDomain: "geo-users-43255.firebaseapp.com",
  databaseURL: "https://geo-users-43255.firebaseio.com",
  projectId: "geo-users-43255",
  storageBucket: "geo-users-43255.appspot.com",
  messagingSenderId: "334689524404",
  appId: "1:334689524404:web:a6d039f45611e1c559d5e1",
  measurementId: "G-VDJ8J9ZQFM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
