import React from "react";


export default function header(){
    return (
        <div className = "header">
           <img className="profile-pic" src={require("./alaminhossain.jpg")}/>
            <div className="profile-content">
                <h1>Al amin Hossain</h1>
                <h4>Compettive Programmer</h4>
                <p>tonmoy@website.com</p>
            </div>
            <div className="header-button">
                <div className="mail-button">    
                <button > <i class="material-icons">email</i> Email</button>
                </div>
                <button className="in-button"><i class="fa fa-linkedin-square"></i> Linkedin</button>
            </div>
        </div>
    )
}