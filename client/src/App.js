import React from 'react';
import "./CSS/App.css"
import LoginScreen from "./Components/LoginScreen.js"
import HomePage from "./Components/HomePage"
import {useSelector} from "react-redux"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () =>{
    const isLoggedIn = useSelector(state=>state.isLogged)

    return (
      <Router>
        <Switch>
          <Route path="/" exact render={()=>isLoggedIn?<HomePage/>:<LoginScreen/>}/>
          <Route path="/login" exact  component={LoginScreen}/>
          <Route path="/home" exact component={HomePage}/>
        </Switch>
      </Router>
    )
}

export default App;