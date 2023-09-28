import React from "react"

export default function Card(props) {

    const { image, rating, reviewCount, country, title, price } = props

    return (

        <div className="card">

            <img src={image} className="card--image" />

            <div className="card--stats">

                <img src="star.png" className="card--star" />

                <span>{rating}</span>

                <span className="gray">({reviewCount}) • </span>

                <span className="gray">{country}</span>

            </div>

            <p>{title}</p>

            <p><span className="bold">From ${price}</span> / person</p>

        </div>

    )

}