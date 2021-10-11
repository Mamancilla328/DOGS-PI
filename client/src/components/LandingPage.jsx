import "./LandingPage.css"
import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdPaw } from "react-icons/io";





const LandingPage = () => {
    return (
        <div className="landing">
            <NavLink className="logo" to="/home" ><IoMdPaw/></NavLink>
        </div>
    )
}

export default LandingPage;