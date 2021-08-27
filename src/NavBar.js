import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className="NavBar-nav">
            <NavLink exact to="/" className="NavBar-NavLink">
                Home
            </NavLink>
            <NavLink to="/dogs" className="NavBar-NavLink">
               Dogs
            </NavLink>
            <NavLink to="/colors" className="NavBar-NavLink">
                Color Factory
            </NavLink>
            <NavLink to="/calc" className="NavBar-NavLink">
               Calculator
            </NavLink>
        </nav>
    )
}

export default NavBar