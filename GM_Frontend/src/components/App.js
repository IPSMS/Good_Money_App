import React, {useState} from "react";
import "../App.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { client } from "../functions/client.js";

export default function App() {

  const [userIsAuthorized, setUserIsAuthorized] = useState(false);

  client('profile').then((user)=>{
    if (!user.error) {
      setUserIsAuthorized(true);
    }
  })
  
  return (
      <Switch>
        <Route exact path="/">
          
            { userIsAuthorized ? <Home /> : <Login /> } 

        </Route>
        <Route path="/signup">

          { userIsAuthorized ? <Home /> : <Signup /> } 
            
          
        </Route>
      </Switch>
  );
  
  
}
