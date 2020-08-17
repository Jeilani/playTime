import React from 'react';
import "./CSS/App.css"
import LoginScreen from "./Components/LoginScreen.js"
import HomePage from "./Components/HomePage"
import  Loading from "./Components/Loading.js"
import { useSelector } from "react-redux"

const App = () =>{
  const isLogged = useSelector(state=>state.isLogged)
  const isLoading = useSelector(state=>state.isLoading)

    if (isLogged && !isLoading){
      return (
          <HomePage/>

      )
    }
    else if (!isLogged && !isLoading) {
      return (
          <LoginScreen/>
      )
    } else {
        return (
          <Loading/>
        )
    }
}

export default App;