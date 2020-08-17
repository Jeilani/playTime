import React from "react"

const ThirdPopUp = ({editedGames, setEditedGames, pickedFriend, setPickedFriend}) => {
    const editedGamesMap = editedGames.map(eachGame=>{
        return (<div></div>)
    })
    return (
        <div className="friendpopupcontainer">
            <div className="friendpopup">
                <div className="friend friendsecondpopup"><img src={pickedFriend.picture.large} alt="Picked Friends"></img></div>
                <i className="fas fa-check"></i>
                <p>Awesome! You just invited {pickedFriend.name.first} to</p>
                <div className="gamesscheduledcontainer"></div>
                <div><button onClick={(e)=>{e.stopPropagation();}}>Submit</button></div>
                <i onClick={()=>{}}className="fas fa-times-circle"></i>
            </div>
        </div>
    )
}

export default ThirdPopUp