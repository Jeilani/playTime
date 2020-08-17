import React from "react"
import "../CSS/LoginScreen.css"
import "../CSS/App.css"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { login, startLoading, stopLoading } from "../actions"


const LoginScreen = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch()
    const onUsernameChange = event =>{
        event.preventDefault();
        setUsername(event.target.value)
    }

    const onPasswordChange = event => {
        event.preventDefault();
        setPassword(event.target.value)
    }

    const letLoadLogin= event =>{
        event.preventDefault()
        dispatch(startLoading())
        setTimeout(()=>{
          Login()
        }, 200)
      }

    const Login = () => {
        dispatch(login())
        dispatch(stopLoading())
    }

    return (
        <div className="LoginScreen">
            <i className="fas fa-clock fa-3x"></i>
            <h1>Welcome to playTime</h1>
            <h2>Pick your sport, your location and setup a <br></br>fun game with friends, strangers and other playTime users 7even days in advance</h2>
            <form onSubmit={letLoadLogin}>
                <input
                placeholder="Username"
                onChange={onUsernameChange}
                value={username}></input>
                <input
                placeholder="Password"
                onChange={onPasswordChange}
                value={password}
                ></input>
                <Button className="loginbutton" type="submit" onClick={letLoadLogin} variant="warning">Login</Button>{' '}
            </form>
        </div>
    )
}

export default LoginScreen