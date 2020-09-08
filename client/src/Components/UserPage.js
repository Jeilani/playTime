import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {renderDay, renderMonth } from "../functions"
import "../CSS/UserPage.css"

const UserPage = () => {
    const dispatch = useDispatch()
    const userProfile = useSelector(state=>state.selectedUserProfile)
    const {picture, name, login} = userProfile
    const mapGamesScheduled = () => {
        return userProfile.gamesScheduled.map((game, index) => {
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
    }

    console.log("userprofilepage")
    console.log(userProfile)

    return (
        <div className="userpagecontainer">
            <div className="userpagesidebar">
                <i class="fas fa-comment-alt"></i>
                <i className="fas fa-plus"></i>
            </div>
            <div className="userpagemaincontent">
                <img alt="user profile" src={picture.large}></img>
                <p>@{login.uuid}</p>
                <h2>{name.first} {name.last}</h2>
                <h1>Activities</h1>
                {userProfile.gamesScheduled?mapGamesScheduled():<p>This user has no activities scheduled</p>}
            </div>
            <i onClick={()=>{dispatch({type: "SWITCH_TO_HOME_PAGE"})}} className="userpagebackarrow fas fa-2x fa-arrow-left"></i>
        </div>
    )
}

export default UserPage