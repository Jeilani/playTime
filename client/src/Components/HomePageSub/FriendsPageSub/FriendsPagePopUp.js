import React, {useState} from "react"
import FirstPopUp from "./FirstPopUp"
import SecondPopUp from "./SecondPopUp"
import ThirdPopUp from "./ThirdPopUp"

const FriendsPagePopUp = ({pickedFriend, whichPopUp, setWhichPopUp, setPickedFriend}) => {
    const [editedGames, setEditedGames] = useState([])
    if (whichPopUp === "first") return <FirstPopUp pickedFriend={pickedFriend} setPickedFriend={setPickedFriend} setWhichPopUp={setWhichPopUp}/>
    if (whichPopUp === "second") return <SecondPopUp editedGames={editedGames} setEditedGames={setEditedGames} pickedFriend = {pickedFriend} setPickedFriend={setPickedFriend} setWhichPopUp={setWhichPopUp}/>
    if (whichPopUp === "third") return <ThirdPopUp setWhichPopUp={setWhichPopUp} editedGames={editedGames} setEditedGames={setEditedGames} pickedFriend={pickedFriend} setPickedFriend={setPickedFriend}/>
}

export default FriendsPagePopUp