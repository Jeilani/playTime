export const login = () =>{
    return {
      type: 'LOGIN'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const startLoading = () =>{
    return {
        type: 'STARTLOADING'
    }
}

export const stopLoading = () =>{
    return {
        type: 'STOPLOADING'
    }
}

export const reloadGames = game =>{
    return {
        type: "RELOADGAMES",
        payload: game
    }
}

export const loadFriends = friends => {
    return {
        type: "LOAD_FRIENDSLIST",
        payload: friends
    }
}

export const setSelectedPark = park => {
    return {
        type: "SET_SELECTED_PARK",
        payload: park
    }
}


export const setParkDate = date => {
    return {
        type: "SET_PARK_DATE",
        payload: date
    }
}

export const setMapDate = date => {
    return {
        type: "SET_MAP_DATE",
        payload: date
    }
}

export const setMapDateToAll = () => {
    return {
        type: "SET_MAP_DATE_TO_ALL_DATES"
    }
}