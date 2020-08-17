import React, {useState} from "react"
import { useSelector } from "react-redux"
import "../../../../CSS/ConfirmationPage.css"
import 'react-calendar/dist/Calendar.css'
import FirstConfirmation from "./ConfirmationPageSub/FirstConfirmation"
import SecondConfirmation from "./ConfirmationPageSub/SecondConfirmation"
import ThirdConfirmation from "./ConfirmationPageSub/ThirdConfirmation"
import FourthConfirmation from "./ConfirmationPageSub/FourthConfirmation"
import FifthConfirmation from "./ConfirmationPageSub/FifthConfirmation"

const ConfirmationPage = () => {
    const whichMapDate = useSelector(state=>state.whichMapDate)
    const [whichConfirmation, setWhichConfirmation] = useState("first")
    const [isInvitingFriends, setIsInvitingFriends] = useState(false)
    const [friendsInvited, setFriendsInvited] = useState([])
    const [hour, setHour] = useState(7)
    const [min, setMin] = useState(30)

    if (whichConfirmation === "first" && !(whichMapDate === "all")) return <FirstConfirmation setWhichConfirmation={setWhichConfirmation}/>
     else if (whichConfirmation === "second" && !(whichMapDate === "all")) return <SecondConfirmation setHour={setHour} setMin={setMin} setWhichConfirmation={setWhichConfirmation}/>
     else if (whichConfirmation === "third" && !(whichMapDate === "all")) return <ThirdConfirmation setHour={setHour} setMin={setMin} hour={hour} min={min} isInvitingFriends={isInvitingFriends} setIsInvitingFriends={setIsInvitingFriends} friendsInvited={friendsInvited} setFriendsInvited={setFriendsInvited} setWhichConfirmation={setWhichConfirmation}/>
     else if (whichConfirmation === "fourth" && !(whichMapDate === "all")) return <FourthConfirmation setWhichConfirmation={setWhichConfirmation}/>
     else return <FifthConfirmation/>

}

export default ConfirmationPage