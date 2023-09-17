import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBHr-0-aM4ckXEQc_wxooyCuyfcHpAqfNE",
  authDomain: "olx1-79660.firebaseapp.com",
  projectId: "olx1-79660",
  storageBucket: "olx1-79660.appspot.com",
  messagingSenderId: "1044461136547",
  appId: "1:1044461136547:web:c947b3d7dcc8c984602d16",
  measurementId: "G-5BYY221TQX"
};




export default firebase.initializeApp(firebaseConfig)