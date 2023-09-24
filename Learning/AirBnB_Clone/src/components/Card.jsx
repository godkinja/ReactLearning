import React from "react"

export default function Card() {

    return (

        <div className="card">

            <img src="./katie-zaferes.png" alt="Katie Zaferes" className="card--photo"/>

            <div className="rating--star">

                <img src="./star.png" alt="Star" className="rating--star--icon"/>

                <p className="rating--star--text">5.0</p>

                <p className="rating--star--desc"> (6) • USA</p>

            </div>

            <p className="card--info">Life lessons with Katie Zaferes</p>

            <p className="card--price"><span className="price--bold">From $136</span> / person</p>

        </div>

    )

}