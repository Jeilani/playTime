import React, { useState } from 'react'
import "../../../CSS/LocateGame.css"
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import Search from "./Search"
import basketballicon from "../../../images/basketball.svg"
import soccericon from "../../../images/soccer.svg"
import footballicon from "../../../images/football.svg"
import tennisicon from "../../../images/tennis.svg"
import baseballicon from "../../../images/baseball.svg"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedPark } from "../../../actions"
import Sidebar from "./LocateGameSub/Sidebar"
import ConfirmationPage from "./LocateGameSub/ConfirmationPage"
import MarkerPopUp from "./LocateGameSub/MarkerPopUp"

const places = ["places"];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const LocateGame = () => {
  let containerStyle;
  if (window.innerWidth < 1000) {
    containerStyle= {
      position: "absolute",
      top: "0",
      left: "0",
      width: '100vw',
      height: '80vh'}
    } else {containerStyle = {
    position: "absolute",
    top: "0",
    left: "20vw",
    width: '80vw',
    height: '100vh'
  }}
  const dispatch = useDispatch()
  const gamesScheduled = useSelector(state=>state.gamesScheduled)
  const isMapConfirmation = useSelector(state=>state.isMapConfirmation)
  const whichMapDate = useSelector(state=>state.whichMapDate)
  const [markerInfo, setMarkerInfo] = useState(null)
  const [isMarkerClicked, setIsMarkerClicked] = useState(false)
  const [map, setMap] = useState(null)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: places,
  });

  const relocate = () => {
    navigator.geolocation.getCurrentPosition(position=>{
      map.panTo(
        {lat: position.coords.latitude,
          lng: position.coords.longitude}
        )
        map.setZoom(12)
        setMap(map)
    }, err=>{console.log("error in locater button" + err)})
  }
  const goBack = () =>{
    dispatch({type: "DIDNT_PICKSPORT"})
    dispatch({type: "nosportpicked"})
  }

  const onMapClick = React.useCallback(event=>{
    if (event.placeId){
      const placesService = new window.google.maps.places.PlacesService(map);
      placesService.getDetails({
          placeId: event.placeId
      }, (results, status) => {
          if (status === "OK"){
            const parkNameArray = results.name.toLowerCase().split(' ')
            if (parkNameArray.includes("park") || results.types.includes("park")) {
            const parkObject = {
              name: results.name,
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              photo: results.photos[0].getUrl(),
              website: results.website,
              types: results.types
            }

            dispatch({type: "SET_MAP_CONFIRMATION_TRUE"})
            dispatch(setSelectedPark(parkObject))
            } else {
              alert("This is not a park, please choose a park")
            }

          }
      });
    } else {
      alert("Not a valid place")
    }
  }, [map, dispatch])

  const panTo = React.useCallback(({lat, lng})=>{
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(16)
  }, [])

  const mapRef = React.useRef()

  const onLoad = React.useCallback(map => {
    navigator.geolocation.getCurrentPosition(position=>{
      mapRef.current = map;
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      map.panTo(
        {lat: position.coords.latitude,
          lng: position.coords.longitude}
        )
        map.setZoom(14)
        setMap(map)
      }, (err)=>{console.log(err)});
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const callMarkers = () => {
    if (whichMapDate === "all") {
    return gamesScheduled.map(marker => {
      let icon;
      switch (marker.sport) {
        case "Football":
          icon = footballicon
          break;
        case "Basketball":
          icon = basketballicon
          break;
        case "Soccer":
          icon = soccericon
          break;
        case "Hiking":
          icon = tennisicon
          break;
        case "Baseball":
          icon = baseballicon
          break
        default:
          return null;
      }

      return (
      <Marker
      key = {marker.date.toISOString()}
      position = {{lat: marker.lat, lng: marker.lng}}
      icon = {{
          url: icon,
          scaledSize: new window.google.maps.Size(30,30),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15, 15)
      }}
      onClick={()=>{setMarkerInfo(marker); setIsMarkerClicked(true)}}
      />)
    })} else {
       return gamesScheduled.filter(game=>game.date.getDate() === whichMapDate.getDate()?true:null).map(marker => {
                let icon;
                switch (marker.sport) {
                  case "Football":
                    icon = footballicon
                    break;
                  case "Basketball":
                    icon = basketballicon
                    break;
                  case "Soccer":
                    icon = soccericon
                    break;
                  case "Hiking":
                    icon = tennisicon
                    break;
                  case "Baseball":
                    icon = baseballicon
                    break
                  default:
                    return null;
                }

                return (
                <Marker
                key = {marker.date.toISOString()}
                position = {{lat: marker.lat, lng: marker.lng}}
                icon = {{
                    url: icon,
                    scaledSize: new window.google.maps.Size(30,30),
                    origin: new window.google.maps.Point(0,0),
                    anchor: new window.google.maps.Point(15, 15)
                }}
                onClick={()=>{setMarkerInfo(marker); setIsMarkerClicked(true)}}
                />)
      })

    }
  }

  if (loadError) return "Error";
  if (!isLoaded) { return (<div className="maploadingiconcontainer"> <i className="maploadingicon fas fa-circle-notch fa-4x"></i></div>)}
  return (<div className="mapmain">
            <Sidebar/>
            <Search panTo = {panTo} />
            <GoogleMap
              mapContainerStyle={containerStyle}
              className="actualMap"
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={onMapClick}
              options={options}
              fullscreenControl = {false}>
                {isLoaded?callMarkers():null}
                <i className="locate fas fa-location-arrow" onClick = {()=>{relocate()}}></i>
            </GoogleMap>
            <i onClick={goBack} className="backarrow fas fa-2x fa-arrow-left"></i>
            {isMapConfirmation?<ConfirmationPage/>:null}
            {isMarkerClicked?<MarkerPopUp setIsMarkerClicked={setIsMarkerClicked} markerInfo={markerInfo} setMarkerInfo={setMarkerInfo}/>:null}
            </div>
          )
}

export default React.memo(LocateGame)


