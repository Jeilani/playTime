import React from "react"
import "../../CSS/SearchFriendsPage.css"

const SearchFriendPage = () => {
    const [clicked, setClicked] = React.useState(false)

        if (clicked) {
            console.log("clicked is true")
            return (
                <div className="searchfriendpage">
                    <div className="clickedsearchbox">
                        <form>
                        <i className="fas fa-search" type="submit"></i>
                            <input onClick={()=>{setClicked(true)}}
                            >

                            </input>

                        </form>
                    </div>
                <div className="results">

                </div>
            </div>
            )
        } else {
            return (
                <div className="searchfriendpage">
                    <div className="searchbox">
                        <form>
                        <i className="fas fa-search" type="submit"></i>
                            <input onClick={()=>{setClicked(true)}}
                            >

                            </input>

                        </form>
                    </div>
                    <div className="results">

                    </div>
                </div>
            )
        }
}

export default SearchFriendPage