import React from "react"
import { useSelector } from "react-redux"
import "../../../../CSS/LocateGame.css"
import Dates from "./Dates"


const Sidebar = () => {
    const sportPicked = useSelector(state=>state.sportPicked)
    return (
      <div className="mapsidebar">
        <p>You are setting up a {sportPicked.toLowerCase()} activity</p>
        <p>Search a park or look for one near you on the map</p>
        <p>Pick a date to view or set up an activity</p>
        <Dates/>
      </div>
    )
}


export default Sidebar