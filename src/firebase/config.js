import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCH805z51iAGkVFVJkoCONmNazujw3DcI",
  authDomain: "reactolx-1ce3d.firebaseapp.com",
  projectId: "reactolx-1ce3d",
  storageBucket: "reactolx-1ce3d.appspot.com",
  messagingSenderId: "26844729927",
  appId: "1:26844729927:web:ce2b8e52b1269262fb9762",
  measurementId: "G-RSVGHGJTSH",
};

export default firebase.initializeApp(firebaseConfig);
