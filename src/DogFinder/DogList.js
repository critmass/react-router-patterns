import DogCard from "./DogCard"
import { defaultProps } from "./DogContext"
import React from "react"

const DogList = () => {

    const {dogs} = defaultProps

    return (<div>
        <h1>Dog List</h1>
        <div>
            {dogs.map( dog => <DogCard dog={dog}/> )}
        </div>
    </div>)
}

export default DogList