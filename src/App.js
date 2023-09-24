
import React,{useEffect,useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from './Pages/Login'
import Create from './Pages/Create';
import ViewPost from  './Pages/ViewPost';
import { AuthContext, FirebaseContext } from "./store/Context.1";

function App  () {
const {setUser} =useContext(AuthContext)
const {firebase}=useContext(FirebaseContext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})


return(
  <div>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup"  component={Signup} />
      <Route path="/login"  component={Login} />
      <Route path="/create"  component={Create} />
      <Route path="/viewpost" component={ViewPost} />
    </Router>
  </div>
);
}
export default App;
