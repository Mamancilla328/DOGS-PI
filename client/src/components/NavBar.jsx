import "./NavBar.css"
import React from "react"
import { NavLink } from "react-router-dom"
import Search from "./Search.jsx"
import Order from "./Order.jsx"
import { IoIosAddCircle, IoIosHome } from "react-icons/io";

const NavBar = () => {
    return (
        <div className= "Container">

            <NavLink to="/home" className="homeAdd"><IoIosHome/></NavLink>
            <Search/>
            <div className="extra">
            <Order className="order"/>
            <NavLink to="/home/create"className="homeAdd"><IoIosAddCircle/></NavLink>
            </div>

        </div>
    )
}

export default NavBar