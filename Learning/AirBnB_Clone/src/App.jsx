import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Data from "./data.js"

export default function App() {

    const card = Data.map(item => 
      
      <Card 

        key = {item.id}
        image = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        country = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}

      />

    )

    // <Hero />

    return (

      <>

        <Navbar />

        <section className="cards-list">

          {card}
        
        </section>

      </>

    )

}

/*

<Card 

  image ="katie-zaferes.png"
  rating ="5.0"
  reviewCount ="6"
  country = "POR"
  title = "A Inês cheira mal"
  price = "244"

/>

 */