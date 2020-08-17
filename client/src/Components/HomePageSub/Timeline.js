import React from "react"
import { useSelector } from "react-redux"
import "../../CSS/Timeline.css"

const Timeline = () => {
    const friendsList = useSelector(state=>state.friendsList)
    const friendsListElements = friendsList.map((friend, index)=>{
        return (
            <div className="timelineactions" key={index}>
                <img className="timelinepicture" src={friend.picture.large} alt="User's headshot"></img>
                <p>{friend.name.first} joined an activity for Wednesday</p>
                <p>{index + 2} hours ago</p>
            </div>
        )
    })

    return (
        <div className="timelinepage">
            {friendsListElements}
        </div>
    )
}

export default Timeline