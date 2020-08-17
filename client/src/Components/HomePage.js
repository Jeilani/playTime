import React from "react"
import "../CSS/HomePage.css"
import PickSportPage from "./HomePageSub/PickSportPage"
import FriendsPage from "./HomePageSub/FriendsPage"
import { useDispatch, useSelector } from "react-redux"
import { logout, startLoading, stopLoading, reloadGames } from "../actions"
import GamesScheduled from "./HomePageSub/GamesScheduled"
import Timeline from "./HomePageSub/Timeline"
import SearchFriendsPage from "./HomePageSub/SearchFriendsPage.js"


const HomePage = () => {
    const whichPage = useSelector(state => state.whichHomePage)
    const gamesScheduled = useSelector(state=> state.gamesScheduled)
    const userHeadshot = useSelector(state=>state.userProfile.profilePhoto)
    const dispatch = useDispatch()

    const letLoadLogout = event => {
        event.preventDefault()
        dispatch(startLoading())
        setTimeout(()=>{
          Logout()
        }, 200)
    }

    const Logout = () => {
        dispatch(logout())
        dispatch(stopLoading())
    }

    const addToGames = game => {
        dispatch(reloadGames(game))
    }


    const renderMainContent = () => {
        switch(whichPage) {
            case "friends":
            return (
                <FriendsPage gamesScheduled={gamesScheduled}/>
            )
            case "setup":
            return (
                <PickSportPage changeMainContent={changeMainContent} addToGames={addToGames} gamesScheduled={gamesScheduled}/>
            )
            case "schedule":
                return (
                <GamesScheduled/>
                )
            case "timeline":
                return (
                <Timeline/>
                )
            case "loadinghomepage":
                return (
                <div className="homeloadingiconcontainer">
                    <i className="homeloadingicon fas fa-circle-notch fa-4x"></i>
                </div>
                )
            case "search":
                return (
                    <SearchFriendsPage/>
                )
            default:
            return (
                <div>Home Page</div>
            )
        }

    }

    const changeMainContent = pageTitle => {
        dispatch({type:"loadinghomepage"})
        setTimeout(()=>{
            dispatch({type: pageTitle})
        }, 200)
    }

    return (
            <div className="HomePage">
                <div className="navigationsidebar">
                    <img className="profileimage" alt="Profile headshot" src={userHeadshot}></img>
                    <li onClick={()=>{changeMainContent("search")}}><i className="fas fa-search"></i><span className="wordicon">Search</span></li>
                    <li onClick={()=>{changeMainContent("timeline")}}><i className="fas fa-stream"></i><span className="wordicon">Timeline</span></li>
                    <li onClick={()=>{changeMainContent("friends")}}><i className="fas fa-user-friends"></i><span className="wordicon">Friends</span></li>
                    <li onClick = {()=>{changeMainContent("setup")}}><i className="fas fa-location-arrow"></i><span className="wordicon">Set Up</span></li>
                    <li onClick={()=>{changeMainContent("schedule")}}><i className="fas fa-calendar-alt"></i><span className="wordicon">Schedule</span></li>
                    <li onClick={letLoadLogout}><i className="fas fa-sign-out-alt" ></i><span className="wordicon">Logout</span></li>
                </div>
                <div className="maincontent">
                    {renderMainContent()}
                </div>
            </div>
        )
}


export default HomePage