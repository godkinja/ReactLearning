import React from "react"

export default function Card(props) {

    const { image, rating, reviewCount, country, title, price, openSpots } = props

    let badgeText

    if (openSpots === 0) {

        badgeText = "SOLD OUT"

    } else if (country === "Online") {

        badgeText = "ONLINE"

    }

    return (

        <div className="card">

            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={image} className="card--image" />

            <div className="card--stats">

                <img src="star.png" className="card--star" />

                <span>{rating}</span>

                <span className="gray">({reviewCount}) • </span>

                <span className="gray">{country}</span>

            </div>

            <p className="card--title">{title}</p>

            <p className="card--price"><span className="bold">From ${price}</span> / person</p>

        </div>

    )

}