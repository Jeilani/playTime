import React  from "react"
import {useSelector, useDispatch} from "react-redux"
import {renderMonth} from "../../../../../functions"
import TimePicker from "./TimePicker"
import "../../../../../CSS/ConfirmationPage.css"

const SecondConfirmation = ({setWhichConfirmation, setHour, setMin}) => {
    const selectedPark = useSelector(state=>state.selectedPark)
    const whichMapDate = useSelector(state=>state.whichMapDate)
    const sportPicked = useSelector(state=>state.sportPicked)
    const dispatch = useDispatch()


    return (
        <div className="mapconfirmationcontainer">
            <div className="secondconfirmationpopup">
                <img className="parkphoto" alt="chosen park" src={selectedPark.photo}></img>
                <a href={selectedPark.website} target="_blank" rel="noopener noreferrer"><p>{selectedPark.name}</p></a>
                <p>Pick a time to set up your {sportPicked.toLowerCase()} activity/game on {renderMonth(whichMapDate.getMonth())} {whichMapDate.getDate()}</p>
                <TimePicker setHour={setHour} setMin={setMin}/>
                <button onClick={()=>{setWhichConfirmation("third")}} className="submitbutton">Submit</button>
                <i onClick={()=>{dispatch({type:"SET_MAP_CONFIRMATION_FALSE"}); setWhichConfirmation("first")}} className="fas fa-times-circle"></i>
            </div>
        </div>
    )
}

export default SecondConfirmation