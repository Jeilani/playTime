import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {renderWeekday, renderMonth } from "../../../functions"
import "../../../CSS/ConfirmationPage.css"

const SecondPopUp = ({pickedFriend, setWhichPopUp, setPickedFriend, editedGames, setEditedGames}) => {
    const gamesScheduled = useSelector(state=>state.gamesScheduled)
    const dispatch = useDispatch()
    const addUserToGame = game => {
        const newInviteList = [...game.friendsInvited, pickedFriend]
        const editedGame = {
            ...game,
            friendsInvited: newInviteList
        }
        setEditedGames(prevGames=>[...prevGames, editedGame])
    }
    const submitInvites = () => {
        editedGames.forEach(eachGame=>{
            dispatch({type: "EDIT_GAME", payload: eachGame})
        })
    }
    const isFriendInGame = (peopleInvited) => {
        let returnvalue = false
        peopleInvited.forEach(person=>{
            if (person.login.uuid === pickedFriend.login.uuid){
                returnvalue = true
            }
        })
        return returnvalue
    }
    const isGameInEditedGames = (game) => {
        let returnvalue = false
        editedGames.forEach(eachGame=>{
            if (game.gameID === eachGame.gameID) {
                returnvalue = true
            }
        })
        return returnvalue
    }
    const gamesScheduledMap = gamesScheduled.filter(eachGame=>!isFriendInGame(eachGame.friendsInvited)).map(eachGame=>{
        return (
                <div className={`${isGameInEditedGames(eachGame)? 'clickedGame': 'alldates'}`} onClick={()=>{addUserToGame(eachGame)}} key={eachGame.lat} className="eachgame"><span className="eachgamesport">{eachGame.sport}</span> activity scheduled at <span className="eachgamelocation">{eachGame.name}</span> on <span className="eachgamedate">{renderWeekday(eachGame.date.getDay())}, {renderMonth(eachGame.date.getMonth())} {eachGame.date.getDate()}</span></div>
        )
    })

    return (
        <div className="friendpopupcontainer">
            <div className="friendpopup">
                <div className="friend friendsecondpopup"><img src={pickedFriend.picture.large} alt="Picked Friends"></img></div>
                <p>Which game do you want to invite {pickedFriend.name.first} to?</p>
                <div className="gamesscheduledcontainer">{gamesScheduledMap}</div>
                <div><button onClick={(e)=>{e.stopPropagation(); submitInvites(); setWhichPopUp("third");}}>Submit</button></div>
                <i onClick={()=>{setWhichPopUp(null); setPickedFriend(null); setEditedGames([])}}className="fas fa-times-circle"></i>
            </div>
        </div>
    )
}

export default SecondPopUp