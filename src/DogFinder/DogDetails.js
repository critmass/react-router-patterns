import { Redirect, useParams  } from "react-router-dom"
import { defaultProps } from "./DogContext"
import React from "react"

const DogDetails = () => {

    const {name} = useParams()
    const {dogs} = defaultProps
    const [info] = dogs.filter( dog => dog.name === name )
    if( !info ) return <Redirect to="/dogs"/>
    return (
        <div>
            <h1>{ info.name }</h1>
            <img src={info.src}/>
            <p>Age:{info.age}</p>
            <ul>
                {info.facts.map( fact => <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails