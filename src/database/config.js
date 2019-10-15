import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDHEDCeAtTY7wcOKSgaQUyEAaO0SQu0lc4",
  authDomain: "buddha-gallery-react-website.firebaseapp.com",
  databaseURL: "https://buddha-gallery-react-website.firebaseio.com",
  projectId: "buddha-gallery-react-website",
  storageBucket: "buddha-gallery-react-website.appspot.com",
  messagingSenderId: "274707978541",
  appId: "1:274707978541:web:30e3f3a36050faca435ba4",
  measurementId: "G-R1H9VVCRSP"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

const database = firebase.database()

export {database}
