import React, {useState} from "react"
import "../../CSS/FriendsPage.css"
import { useSelector } from "react-redux"
import FriendsPagePopUp from "./FriendsPageSub/FriendsPagePopUp"

const FriendsPage = props =>{
    const [pickedFriend, setPickedFriend] = useState(null)
    const [whichPopUp, setWhichPopUp] = useState(null)
    const friendsList = useSelector(state=>state.friendsList)

    if (!friendsList.length > 0){
        return  (
            <div className="friendspagecontainer">
                Hello "Jane Doe". Welcome to PlayTime. You currently do not have anybody on your PlayTime friends list. Search for people
                in the search box above to get started on adding other PlayTime Users to your friends list.
            </div>
        )
    } else {
        return (
            <div className="friendspagecontainer">
                <h1>Click on friend to set up a game with them</h1>
                <div className="friendslistcontainer">
                    {friendsList.map((friend, index)=>{
                        return (
                            <div  className="friend" key={index}>
                                <img onClick={()=>{setWhichPopUp("first"); setPickedFriend(friend)}} src={friend.picture.large} alt="Headshot"></img>
                                <p>{friend.name.first}</p>
                            </div>
                        )
                        })}
                </div>
                {pickedFriend?<FriendsPagePopUp pickedFriend={pickedFriend} whichPopUp={whichPopUp} setWhichPopUp={setWhichPopUp} setPickedFriend={setPickedFriend}/>:null}
            </div>
        )
    }
}

export default FriendsPage