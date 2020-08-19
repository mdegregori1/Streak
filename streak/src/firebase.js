
import firebase from "firebase/app"
// loads all data and files from firebase firestore
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCFwg5S4a7x8t4FASC6ba0kH3cHaSF-Pkg",
    authDomain: "streak-5cdd5.firebaseapp.com",
    databaseURL: "https://streak-5cdd5.firebaseio.com",
    projectId: "streak-5cdd5",
    storageBucket: "streak-5cdd5.appspot.com",
    messagingSenderId: "767687210604",
    appId: "1:767687210604:web:7a075cfda88f1a96fc8a49",
    measurementId: "G-YG0KR6TF5K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// exporting this version allows for use to use configured version
export default firebase;