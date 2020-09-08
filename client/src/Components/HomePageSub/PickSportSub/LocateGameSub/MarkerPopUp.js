import React from "react"
import {useSelector} from "react-redux"
import "../../../../CSS/MarkerPopUp.css"
import {renderMonth, renderWeekday, amorpm, twelveHourClock} from "../../../../functions"


const MarkerPopUp = ({setIsMarkerClicked, markerInfo, setMarkerInfo}) =>{
    const currentUser = useSelector(state=>state.currentUser)
    const month = renderMonth(markerInfo.date.getMonth())
    const weekday = renderWeekday(markerInfo.date.getDay())
    const date = markerInfo.date.getDate()
    const hour = markerInfo.date.getHours()
    const minutes = markerInfo.date.getMinutes()
    const friendsAttending = markerInfo.friendsInvited.map(eachUser=>{
        return (<div><img alt="user" className="userpic" src={eachUser.picture.large}></img> {eachUser.name.first} {eachUser.name.last}</div>)
    })
    const isCurrentUserAdmin = () => {
        if (markerInfo.gameAdmin === currentUser.login.uuid){
            return true
        } else return false
    }
    const isUserAttending = () =>{
        let returnvalue = false
        markerInfo.friendsInvited.forEach(friend=>{
            if (friend.login.uuid === currentUser.login.uuid){
                returnvalue = true
            }
        })
        return returnvalue
    }
    const isGameOpen = () => {
        if (!isCurrentUserAdmin() && friendsAttending.length < 6 && markerInfo.openForInvite && !isUserAttending()) {
            return true
        } else return false
    }
    const UsersInvited = () => {
        if (friendsAttending.length === 0 && isGameOpen()){
            return <h5>There are currently no other users attending this activity and it's open for joining</h5>
        }
        else if (friendsAttending.length === 0){
            return <h5>There are currently no other users attending this activity</h5>
        } else {
            return (
                <div>
                    <h5>Users Attending</h5>
                    <div>{friendsAttending}</div>
                </div>
            )
        }
    }

    return (
        <div className="mapconfirmationcontainer">
            <div className="confirmationpopup">
                <span>{isCurrentUserAdmin()?<h5>You are the current Admin</h5>:null}</span>
                <img className="parkphoto" alt="park" src={markerInfo.photo}></img>
                <h3>{markerInfo.sport} activity at {markerInfo.name}</h3>
                <h4>Set for {weekday}, {month} {date} at {twelveHourClock(hour)}:{minutes} {amorpm(markerInfo.date)}</h4>
                {UsersInvited()}
                {isGameOpen()?<button>Join</button>:null}
                <i onClick={()=>{setIsMarkerClicked(false); setMarkerInfo(null)}}className="fas fa-times-circle"></i>
            </div>
        </div>
    )

}

export default MarkerPopUp