import React from 'react'

export default function Joke(props) {

    return (
        <>
        
        <div className="joke">

            <h3 style={{display: props.setup ? "block" : "none"}}>Question: {props.setup}</h3>

            <h4 style={{color: !props.question && "#888888"}}>Answer: {props.punchline}</h4>

        </div>
    
        </>
    )

}