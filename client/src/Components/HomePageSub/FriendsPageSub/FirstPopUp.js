import React from "react"



const FirstPopUp = ({pickedFriend, setWhichPopUp, setPickedFriend}) => {
    return (
        <div className="friendpopupcontainer">
            <div className="friendpopup">
                <div className="friend"><img src={pickedFriend.picture.large} alt="Picked Friends"></img></div>
                <p>Do you want to invite {pickedFriend.name.first} to a activity/game?</p>
                <div><button onClick={(e)=>{e.stopPropagation();setWhichPopUp("second")}}>Yes</button><button onClick={(e)=>{e.stopPropagation();setWhichPopUp(null); setPickedFriend(null)}}>No</button></div>
                <i onClick={()=>{setWhichPopUp(null); setPickedFriend(null);}}className="fas fa-times-circle"></i>
            </div>
        </div>
    )
}

export default FirstPopUp