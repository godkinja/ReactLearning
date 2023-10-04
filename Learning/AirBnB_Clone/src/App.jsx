import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Data from "./data.js"

export default function App() {

    const card = Data.map(item => 
      
      <Card 

        image = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        country = {item.location}
        title = {item.title}
        price = {item.price}

      />

    )

    return (

      <>

        <Navbar />

        <Hero />

        {card}
        
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