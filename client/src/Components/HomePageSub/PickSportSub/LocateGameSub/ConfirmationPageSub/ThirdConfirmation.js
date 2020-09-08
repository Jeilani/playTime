import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { reloadGames, setSelectedPark } from "../../../../../actions"
import { generateID } from "../../../../../functions"
import "../../../../../CSS/ConfirmationPage.css"

const ThirdConfirmation = ({setWhichConfirmation, isInvitingFriends, setIsInvitingFriends, friendsInvited, setFriendsInvited, setHour, setMin, hour, min}) => {
    const dispatch = useDispatch()
    const sportPicked = useSelector(state=>state.sportPicked)
    const selectedPark = useSelector(state=>state.selectedPark)
    const whichMapDate = useSelector(state=>state.whichMapDate)
    const friendsList = useSelector(state=>state.friendsList)
    const currentUserID = useSelector(state=>state.currentUser.login.uuid)
    const addGames = parkObject =>{
      const newObject = {
          ...parkObject,
          gameAdmin: currentUserID,
          usersAttending: ["Kobe", "LeBron", "Michael"],
          sport: sportPicked,
          friendsInvited,
          dateCreated: new Date()
      }
      dispatch(reloadGames(newObject))
    }

    const handleParkSubmit = () => {
      const gameID = generateID()
      let parkObj = {
          ...selectedPark,
          date: new Date(whichMapDate.getFullYear(), whichMapDate.getMonth(), whichMapDate.getDate(), hour, min),
          gameID,
          friendsInvited: [],
          openForInvite: true
        }

        setWhichConfirmation("third")
        addGames(parkObj)
        dispatch(setSelectedPark(parkObj))
        setHour(null)
        setMin(null)
    }

    const eliminateFriend = friend => {
      setFriendsInvited(prevFriends=>{
        return prevFriends.filter(item=>!(item === friend))
      })
    }

    const friendsListElements = friendsList.filter(friend=>{return !friendsInvited.includes(friend)}).map(friend=>{
      return (
      <div key={friend.name.first} className="eachfrienditem"><span className="imagecontainer"><img alt = "friend" src={friend.picture.large}></img></span><p>{friend.name.first} {friend.name.last}</p> <i onClick={()=>{setFriendsInvited((prevFriends)=>{return [...prevFriends, friend]})}} className="fas fa-plus"></i></div>
      )
    })

    const friendsInvitedElements = friendsInvited.map(friend=>{
      return (
        <div key={friend.name.first} className="eachfrienditem"><span className="imagecontainer"><img alt="friend" src={friend.picture.large}></img></span><p>{friend.name.first} {friend.name.last}</p> <i onClick={()=>{eliminateFriend(friend)}} className="fas fa-minus"></i></div>
      )
    })

    if (isInvitingFriends){
      return (
      <div className="mapconfirmationcontainer">
        <div className="confirmationpopupfriends">
          <h3>Pick friends to invite</h3>
          <div className="friendscontainer">
            <div className="friendsListElements"><p>Friends List</p><div className="itemscontainer">{friendsListElements}</div></div>
            <div className="friendsListElements"><p>Invited</p><div className="itemscontainer">{friendsInvitedElements}</div></div>
          </div>
          <div><button className="submitbutton" onClick={()=>{handleParkSubmit(); setWhichConfirmation("fourth")}}>Submit</button></div>
          <i onClick={()=>{dispatch({type: "SET_MAP_CONFIRMATION_FALSE"}); setWhichConfirmation("first")}}className="fas fa-times-circle"></i>
        </div>
      </div>
      )
    } else {
    return (
      <div className="mapconfirmationcontainer">
        <div className="confirmationpopup">
        <h3>Would you like to invite some friends?</h3>
          <div><button onClick={()=>{setIsInvitingFriends(true)}}>Yes</button><button onClick={()=>{handleParkSubmit(); setWhichConfirmation("fourth")}}>NO</button></div>
          <i onClick={()=>{dispatch({type: "SET_MAP_CONFIRMATION_FALSE"})}}className="fas fa-times-circle"></i>
        </div>
      </div>
      )
    }
}

export default ThirdConfirmation