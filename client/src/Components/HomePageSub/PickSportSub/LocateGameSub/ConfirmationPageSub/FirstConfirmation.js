import React from "react"
import "../../../../../CSS/ConfirmationPage.css"
import { useSelector, useDispatch } from "react-redux"
const FirstConfirmation = ({setWhichConfirmation}) =>{
    const dispatch = useDispatch()
    const sportPicked = useSelector(state=>state.sportPicked)
    return (
        <div className="mapconfirmationcontainer">
            <div className="confirmationpopup">
                <h3>Do you want to schedule a {sportPicked.toLowerCase()} activity here?</h3>
                <div><button onClick={()=>{setWhichConfirmation("second")}}>Yes</button><button onClick={()=>{dispatch({type:"SET_MAP_CONFIRMATION_FALSE"})}}>No</button></div>
                <i onClick={()=>{dispatch({type: "SET_MAP_CONFIRMATION_FALSE"})}}className="fas fa-times-circle"></i>
            </div>
        </div>
    )
}

export default FirstConfirmation