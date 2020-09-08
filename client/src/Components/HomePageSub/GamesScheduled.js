import React from "react"
import {useSelector} from "react-redux"
import {renderDay, renderMonth} from "../../functions"
import "../../CSS/GamesScheduled.css"

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
