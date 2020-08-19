import React from "react"
import {renderMonth, renderWeekday} from "../../../functions"

const ThirdPopUp = ({setWhichPopUp, editedGames, setEditedGames, pickedFriend, setPickedFriend}) => {
    const editedGamesMap = editedGames.map(eachGame=>{
        return (<div className="eachgame alldates" key={eachGame.lat}><span className="eachgamesport"> {eachGame.sport} {" "}</span><span>{" activity scheduled at "}</span><span className="eachgamelocation">{eachGame.name}</span> on <span className="eachgamedate">{renderWeekday(eachGame.date.getDay())}, {renderMonth(eachGame.date.getMonth())} {eachGame.date.getDate()}</span></div>)
    })
    return (
        <div className="friendpopupcontainer">
            <div className="friendpopup">
                <div className="friend friendsecondpopup"><img src={pickedFriend.picture.large} alt="Picked Friends"></img></div>
                <i className="fas thirdconfirmationcheck fa-check"></i>
                <p>Awesome! You just invited {pickedFriend.name.first} to</p>
                <div className="gamesscheduledcontainer">{editedGamesMap}</div>
                <div><button onClick={(e)=>{e.stopPropagation(); setEditedGames([]); setPickedFriend(null); setWhichPopUp(null)}}>Continue</button></div>
                <i onClick={()=>{setEditedGames([]); setPickedFriend(null); setWhichPopUp(null)}}className="fas fa-times-circle"></i>
            </div>
        </div>
    )
}

export default ThirdPopUp