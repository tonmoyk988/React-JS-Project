import React from "react"

export default function Hero(){
    return(
        <section className="hero">
            <img src={require("../images/photo-grid.png")}/>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique interactive activities led by on-of-a-kind hosts all without leaving home.</p>

        </section>
    )
}
 