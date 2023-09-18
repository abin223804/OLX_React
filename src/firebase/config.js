import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// const firebaseConfig = {
//   apiKey: "AIzaSyBHr-0-aM4ckXEQc_wxooyCuyfcHpAqfNE",
//   authDomain: "olx1-79660.firebaseapp.com",
//   projectId: "olx1-79660",
//   storageBucket: "olx1-79660.appspot.com",
//   messagingSenderId: "1044461136547",
//   appId: "1:1044461136547:web:c947b3d7dcc8c984602d16",
//   measurementId: "G-5BYY221TQX"
// };


const firebaseConfig = {
  apiKey: "AIzaSyBCH805z51iAGkVFVJkoCONmNazujw3DcI",
  authDomain: "reactolx-1ce3d.firebaseapp.com",
  projectId: "reactolx-1ce3d",
  storageBucket: "reactolx-1ce3d.appspot.com",
  messagingSenderId: "26844729927",
  appId: "1:26844729927:web:ce2b8e52b1269262fb9762",
  measurementId: "G-RSVGHGJTSH"
};



export default firebase.initializeApp(firebaseConfig)