import React,{ useContext } from "react"
import { Link } from "react-router-dom"
import ColorContext from "./ColorContext"


const ColorFactory = () => {
    const {colors} = useContext(ColorContext)

    return (
        <div>
            <h2>Color Factory</h2>
            <ul>
                <li>
                    <Link to="/colors/new">New Colors</Link>
                </li>
                {colors.map( color => {
                    return (
                        <li key={color}>
                            <Link to={`/colors/${color}`}>
                                {color}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ColorFactory