import React from "react"
import {useSelector} from "react-redux"
import "../../CSS/GamesScheduled.css"


const renderDay = num => {
    switch (num){
        case 0:
            return "Sun"
        case 1:
            return "Mon"
        case 2:
            return "Tues"
        case 3:
            return "Wed"
        case 4:
            return "Thurs"
        case 5:
            return "Fri"
        case 6:
            return "Sat"
        default:
            return null
    }
}
const renderMonth = num => {
    switch (num) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Oct"
        case 10:
            return "Nov"
        case 11:
            return "Dec"
        default:
            return null
    }
}

const GamesScheduled = () => {
    const gamesScheduled = useSelector(state=>state.gamesScheduled)
    const gamesScheduledList = gamesScheduled.map((game, index) => {
        const dayoftheweek = renderDay(game.date.getDay());
        const date = game.date.getDate().toString();
        const month = renderMonth(game.date.getMonth())
        const year = game.date.getFullYear().toString();
        return (
        <div className="activitycontainer">
            <div className="whichsportgs">
                {game.sport}
            </div>
            <div className="calendar">
                <p className="dayoftheweek">{dayoftheweek}</p>
                <p className="date">{month} {date}</p>
                <p className="year">{year}</p>
            </div>
            <div className="individualgame"
                style={{
                    background: "url("+ game.photo + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"}}
                key={index} >
            <p>{game.name}</p>
            </div>
        </div>)
    })

    return (
    <div className="gamesscheduledpage">
        {gamesScheduledList}
    </div>
    )
}


export default GamesScheduled
