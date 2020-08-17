import React from "react"
import "../../CSS/PickSportPage.css"
import LocateGame from "./PickSportSub/LocateGame"
import {useSelector, useDispatch} from "react-redux"

const PickSportPage = () => {
    const pickedSport = useSelector(state=>state.isPickedSport)
    const dispatch = useDispatch()

    const changeSportPicked = sport =>{
        dispatch({type: "PICKEDSPORT"})
        dispatch({type: sport})
    }

    if (pickedSport) {
        return (
            <LocateGame/>
        )
    } else {
        return (
        <div className="picksportpage">
            <div className="sports basketball" onClick={()=>{changeSportPicked("Basketball")}}>
                <p>Basketball</p>
            </div>
            <div className="sports football" onClick={()=>{changeSportPicked("Football")}}>
                <p>Football</p>
            </div>
            <div className="sports soccer" onClick={()=>{changeSportPicked("Soccer")}}>
                <p>Soccer</p>
            </div>
            <div className="sports hiking" onClick={()=>{changeSportPicked("Hiking")}}>
                <p>Hiking</p>
            </div>
            <div className="sports baseball" onClick={()=>{changeSportPicked("Baseball")}}>
                <p>Baseball</p>
            </div>
        </div>
        )
    }
}


export default PickSportPage