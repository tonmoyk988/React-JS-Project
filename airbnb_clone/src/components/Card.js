import React from "react";

export default function Reac(props){
    return(
        <div className="card">
            <img src={require("../images/"+ props.img)} className="card--image"/>
            <div className="class--stats">
                <img src={require("../images/star.png")} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.country}</span> 
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">${props.price} </p>
        </div>
    )
}