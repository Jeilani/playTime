import React from "react"
import "../CSS/HomePage.css"
import PickSportPage from "./HomePageSub/PickSportPage"
import FriendsPage from "./HomePageSub/FriendsPage"
import {useSelector } from "react-redux"
import GamesScheduled from "./HomePageSub/GamesScheduled"
import Timeline from "./HomePageSub/Timeline"
import SearchFriendsPage from "./HomePageSub/SearchFriendsPage.js"
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom"


const HomePage = () => {
    const userHeadshot = useSelector(state=>state.currentUser.picture.large)

    return (
        <Router>
            <div className="HomePage">
                <div className="navigationsidebar">
                    <img className="profileimage" alt="Profile headshot" src={userHeadshot}></img>
                    <Link to="/searchfriends" className="linkbutton"><li><i className="fas fa-search"></i><span className="wordicon">Search</span></li></Link>
                    <Link to="/timeline" className="linkbutton"><li><i className="fas fa-stream"></i><span className="wordicon">Timeline</span></li></Link>
                    <Link to="/friends" className="linkbutton"><li><i className="fas fa-user-friends"></i><span className="wordicon">Friends</span></li></Link>
                    <Link to="/picksport" className="linkbutton"><li><i className="fas fa-location-arrow"></i><span className="wordicon">Set Up</span></li></Link>
                    <Link to="gamesscheduled" className="linkbutton"><li><i className="fas fa-calendar-alt"></i><span className="wordicon">Schedule</span></li></Link>
                    <li className="linkbutton"> <i className="fas fa-sign-out-alt" ></i><span className="wordicon">Logout</span></li>
                </div>
                <div className="maincontent">
                        <Switch>
                            <Route path="/" exact component={FriendsPage}/>
                            <Route path="/friends" component={FriendsPage}></Route>
                            <Route path="/picksport" component={PickSportPage}></Route>
                            <Route path="/gamesscheduled" component={GamesScheduled}></Route>
                            <Route path="/searchfriends" component={SearchFriendsPage}></Route>
                            <Route path="/timeline" component={Timeline}></Route>
                        </Switch>

                </div>
            </div>
            </Router>
        )
}


export default HomePage