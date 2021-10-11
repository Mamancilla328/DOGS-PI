import "./Card.css"
import React from "react"
import { NavLink } from "react-router-dom";

const Card = ({image, name,id}) => {
    return (
        <div className="card">
            <div className="shadow">
            <div className="img">
            <img src={image.url} alt={name}/>
            </div>
            <div className="info">
            <NavLink to={`/breeds/${id}`}>{name}</NavLink>
            <p>temperament</p>
            </div>
            </div>
        </div>
    )
}

export default Card;