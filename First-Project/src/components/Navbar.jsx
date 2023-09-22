import React from 'react'
import reactLogo from '../assets/react.svg'

export default function Navbar() {

    return(

        <div className="navbar">

            <div className="navbar-header">

                <img src={reactLogo} alt="React Logo" className="nav-logo"/>

                <h3> ReactFacts </h3>

            </div>

            <h4> React Course - Project 1 </h4>

        </div>

    )

}
