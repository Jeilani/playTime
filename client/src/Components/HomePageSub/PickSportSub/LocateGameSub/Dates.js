import React from "react"
import {renderMonth, renderWeekday} from "../../../../functions"
import { setMapDate, setMapDateToAll } from "../../../../actions"
import "../../../../CSS/Dates.css"
import { useDispatch, useSelector } from "react-redux"


const Dates = () => {
    const whichMapDate = useSelector(state=>state.whichMapDate)
    const compareDates = date =>{
        if (whichMapDate === "all"){
            return false
        } else if (whichMapDate.getDate() === date.getDate()){
            return true
        } else return false
    }
    const dispatch = useDispatch()
    const today = new Date()
    const todaysMonth = today.getMonth()
    const todaysYear = today.getFullYear()
    const todaysDate = today.getDate()
    const todaysDay = today.getDay()
    const tomorrow = new Date(todaysYear, todaysMonth, todaysDate + 1)
    const threeDays = new Date(todaysYear, todaysMonth, todaysDate + 2 )
    const fourDays = new Date(todaysYear, todaysMonth, todaysDate + 3 )
    const fiveDays = new Date(todaysYear, todaysMonth, todaysDate + 4 )
    const sixDays = new Date(todaysYear, todaysMonth, todaysDate + 5 )
    const sevenDays = new Date(todaysYear, todaysMonth, todaysDate + 6 )

    return (
        <div className="Dates">
            <div onClick = {()=>{dispatch(setMapDateToAll())}} className={`alldates ${whichMapDate==="all"? 'alldatesclicked': ''}`}><i className="fas fa-calendar-week"></i></div>
            <div onClick = {()=>{dispatch(setMapDate(today))}} className={`individualdate ${compareDates(today)? 'reddate': ''}`}>
                <span className="month">{renderMonth(todaysMonth)} </span>
                <span className="datenumber">{todaysDate}</span>
                <span className="day">{renderWeekday(todaysDay)} </span>
            </div>
            <div onClick = {()=>{dispatch(setMapDate(tomorrow))}} className={`individualdate ${compareDates(tomorrow)? 'reddate': ''}`}>
                <span className="month">{renderMonth(tomorrow.getMonth())} </span>
                <span className="datenumber">{tomorrow.getDate()}</span>
                <span className="day">{renderWeekday(tomorrow.getDay())} </span>
            </div>
            <div onClick = {()=>{dispatch(setMapDate(threeDays))}} className={`individualdate ${compareDates(threeDays)? 'reddate': ''}`}>
                <span className="month">{renderMonth(threeDays.getMonth())} </span>
                <span className="datenumber">{threeDays.getDate()}</span>
                <span className="day">{renderWeekday(threeDays.getDay())} </span>
            </div>
            <div onClick = {()=>{dispatch(setMapDate(fourDays))}} className={`individualdate ${compareDates(fourDays)? 'reddate': ''}`}>
                <span className="month">{renderMonth(fourDays.getMonth())}</span>
                <span className="datenumber">{fourDays.getDate()}</span>
                <span className="day">{renderWeekday(fourDays.getDay())}</span>
            </div>
            <div onClick = {()=>{dispatch(setMapDate(fiveDays))}} className={`individualdate ${compareDates(fiveDays)? 'reddate': ''}`}>
                <span className="month">{renderMonth(fiveDays.getMonth())} </span>
                <span className="datenumber">{fiveDays.getDate()}</span>
                <span className="day">{renderWeekday(fiveDays.getDay())} </span>
            </div>
            <div onClick = {()=>{dispatch(setMapDate(sixDays))}} className={`individualdate ${compareDates(sixDays)? 'reddate': ''}`}>
                <span className="month">{renderMonth(sixDays.getMonth())} </span>
                <span className="datenumber">{sixDays.getDate()}</span>
                <span className="day">{renderWeekday(sixDays.getDay())} </span>
            </div>
            <div onClick = {()=>{dispatch(setMapDate(sevenDays))}} className={`individualdate ${compareDates(sevenDays)? 'reddate': ''}`}>
                <span className="month">{renderMonth(sevenDays.getMonth())}</span>
                <span className="datenumber">{sevenDays.getDate()}</span>
                <span className="day">{renderWeekday(sevenDays.getDay())}</span>
            </div>
        </div>
    )
}

export default Dates