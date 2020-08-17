import React from "react"

import "../../../CSS/Search.css"

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox"

import "@reach/combobox/styles.css"

function Search(props){
    const {ready, value, suggestions:{status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
      requestOptions: {
        location: {lat: () => 39.7392, lng: () => 104.9903 },
        radius: 200 * 1000
      }
    })

    return (
        <div className="search">
            <Combobox
             onSelect = {async(address) => {
                setValue(address, false)
                clearSuggestions()
                try {
                    const results = await getGeocode( { address } )
                    const {lat, lng} = await getLatLng(results[0])
                    props.panTo({lat, lng})
                } catch (error) {
                    console.log("error")
                }

            }}>
                <ComboboxInput
                value={value}
                onChange={e=>{
                setValue(e.target.value)
                }}
                disabled={!ready}
                placeholder={"Enter a park"}
                />
                <ComboboxPopover>
                    <ComboboxList>
                    {status === "OK" && data.map(({id, description})=>{
                        return <ComboboxOption key={id} value={description}/>
                    })}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
  }
  export default Search