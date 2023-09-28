import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"

export default function App() {

    return (

      <>

        <Navbar />

        <Hero />

        <Card 

          image ="katie-zaferes.png"
          rating ="5.0"
          reviewCount ="6"
          country = "POR"
          title = "A Inês cheira mal"
          price = "244"
        
        />
        
      </>

    )

}