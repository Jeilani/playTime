import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {renderMonth} from "../../.././../../functions"
import "../../../../../CSS/ConfirmationPage.css"

const FourthConfirmation = () => {
    const sportPicked = useSelector(state=>state.sportPicked)
    const selectedPark = useSelector(state=>state.selectedPark)
    const dispatch = useDispatch()
    return (
    <div className="mapconfirmationcontainer">
      <div className="confirmationpopup">
        <h3>You just set up a {sportPicked.toLowerCase()} activity at {selectedPark.name} on {renderMonth(selectedPark.date.getMonth())} {selectedPark.date.getDate()} </h3>
        <div><button onClick={()=>{dispatch({type:"SET_MAP_CONFIRMATION_FALSE"})}}>OK</button></div>
        <i onClick={()=>{dispatch({type: "SET_MAP_CONFIRMATION_FALSE"})}}className="fas fa-times-circle"></i>
      </div>
    </div>
  )
}

export default FourthConfirmation