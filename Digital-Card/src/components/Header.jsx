import React from 'react'

export default function Header() {

    return (

        <div className="header">

            <img src="./profile_pic.png" alt="Johnny Canobi" />

            <h1>Rafael Raimundo</h1>

            <h3>Full-Stack Developer</h3>

            <h4><a href="www.barkbark.expert">www.barkbark.expert</a></h4>

            <div className="buttons">

                <a className="email">Email</a>

                <a className="LinkedIn" href="https://www.linkedin.com/in/rafaraimundo/" target="_blank">LinkedIn</a>

            </div>

        </div>

    )

}