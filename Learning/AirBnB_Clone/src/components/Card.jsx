import React from "react"

export default function Card(props) {

    const { image, rating, reviewCount, country, title, price, openSpots } = props

    return (

        <div className="card">

            {openSpots === 0 && <div className="card--badge">SOLD OUT</div>}

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