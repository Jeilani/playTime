import React from "react"
import {useDispatch} from "react-redux"
import "../../../../../CSS/ConfirmationPage.css"

const FifthConfirmation = () => {
    const dispatch = useDispatch()
    return (
    <div className="mapconfirmationcontainer">
      <div className="confirmationpopup">
        <h3>You have to pick a date within the next 7 days on the side panel before you set up an activity</h3>
        <div><button onClick={()=>{dispatch({type:"SET_MAP_CONFIRMATION_FALSE"})}}>OK</button></div>
        <i onClick={()=>{dispatch({type: "SET_MAP_CONFIRMATION_FALSE"})}}className="fas fa-times-circle"></i>
      </div>
    </div>
  )
}

export default FifthConfirmation