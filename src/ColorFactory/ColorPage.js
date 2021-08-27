import { useContext } from "react"
import { Redirect, useParams } from "react-router"
import ColorContext from "./ColorContext"
import NewColors from "./NewColors"


const ColorPage = () => {
    const {color } = useParams()
    const {colors} = useContext(ColorContext)


    if(color === "new") {
        return <NewColors/>
    }
    else if(!colors.includes(color)) {
        return <Redirect to="/colors"/>
    }
    else {
        const style = {
            backgroundColor:color,
            width:"100vw",
            height:"100vh"
        }
        return (
            <div style={style}></div>
        )
    }
}

export default ColorPage