import {combineReducers} from "redux"
import { initialGamesScheduled, friendsAPI, userProfileAPI } from "../DummyData"

const isLogged = (state = false, action) => {
    switch (action.type) {
      case 'LOGIN':
        return true
      case 'LOGOUT':
        return false
      default:
        return state;
    }
}

const isLoading = (state = false, action) => {
    switch (action.type){
        case 'STARTLOADING':
            return true
        case 'STOPLOADING':
            return false
        default:
            return state
    }
}

const whichBasePage = (state="homepage", action) => {
    switch (action.type){
        case "SWITCH_TO_HOME_PAGE":
            return "homepage"
        case "SWITCH_TO_USER_PAGE":
            return "userpage"
        default:
            return state
    }
}

const whichHomePage = (state = "schedule", action) => {
    switch (action.type){
        case "friends":
            return "friends"
        case "setup":
            return "setup"
        case "schedule":
            return "schedule"
        case "timeline":
            return "timeline"
        case "loadinghomepage":
            return "loadinghomepage"
        case "search":
            return "search"
        case "userpage":
            return "userpage"
        default:
            return state

    }
}

const gamesScheduled = (state = initialGamesScheduled, action) => {
    switch (action.type) {
        case "RELOADGAMES":
            return [...state, action.payload]
        case "EDIT_GAME":
            return [...state.filter(game=>!(game.gameID === action.payload.gameID)), action.payload]
        default:
            return state
    }
}

const isPickedSport = (state = false, action) => {
    switch (action.type) {
        case "PICKEDSPORT":
            return true
        case "DIDNT_PICKSPORT":
            return false
        default:
            return state
     }
}

const sportPicked = (state = "", action) => {
    switch (action.type) {
        case "Basketball":
            return "Basketball"
        case "Football":
            return "Football"
        case "Soccer":
            return "Soccer"
        case "Hiking":
            return "Hiking"
        case "Baseball":
            return "Baseball"
        case "NO_SPORT_PICKED":
            return ""
        default:
            return state
    }
}

const friendsList = (state = friendsAPI, action) => {
    switch (action.type){
        case "LOAD_FRIENDSLIST":
            return action.payload
        default:
            return state
    }
}

const selectedPark = (state = null, action) => {
    switch (action.type) {
        case "SET_SELECTED_PARK":
            return action.payload
        case "REMOVE_SELECTED_PARK":
            return null
        default:
            return state
    }
}

const parkDate = (state = null, action) => {
    switch (action.type) {
        case "SET_PARK_DATE":
            return action.payload
        case "REMOVE_PARK_DATE":
            return null
        default:
            return state
    }
}

const isMapConfirmation = (state = false, action) => {
    switch (action.type) {
        case "SET_MAP_CONFIRMATION_FALSE":
            return false
        case "SET_MAP_CONFIRMATION_TRUE":
            return true
        default:
            return state
    }
}

const whichMapDate = (state = "all", action) =>{
    switch (action.type) {
        case "SET_MAP_DATE_TO_ALL_DATES":
            return "all"
        case "SET_MAP_DATE":
            return action.payload
        default:
            return state
    }
}

const currentUser = (state = userProfileAPI, action) => {
    switch (action.type){
        case "USER_LOGIN":
            return action.payload
        case "USER_LOGOUT":
            return null
        default:
            return state
    }
}

const selectedUserProfile = (state = null, action) => {
    switch(action.type){
        case "CHANGE_USER":
            return action.payload
        case "REMOVE_USER":
            return null
        default:
            return state
    }
}

const allReducers = combineReducers({
    currentUser,
    isLoading,
    isLogged,
    whichBasePage,
    whichHomePage,
    gamesScheduled,
    isPickedSport,
    sportPicked,
    friendsList,
    selectedPark,
    parkDate,
    isMapConfirmation,
    whichMapDate,
    selectedUserProfile
})

export default allReducers