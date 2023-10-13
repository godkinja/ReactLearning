import memesData from "../memesData"
import { useState } from "react"

export default function MemeForm() {

    let url

    function getMemeImage(){

        const memesArray = memesData.data.memes

        const randomNumber = Math.floor(Math.random() * memesArray.length)

        url = memesArray[randomNumber].url

        console.log(url)

    }

    /*const thingsArray = ["Thing 1", "Thing 2"]

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function addItem(){

        const newThingText = `Thing ${thingsArray.length + 1}`

        thingsArray.push(newThingText)

        console.log(thingsArray)

    }*/

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    function addItem(){

        const newThingText = `Thing ${thingsArray.length + 1}`

        setThingsArray(prevThingsArray => [...prevThingsArray, newThingText])

    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (

        <main>

            <form className="form">

                <input 

                    type="text"

                    placeholder="Top text"

                    className="form--input"

                />

                <input 

                    type="text"

                    placeholder="Bottom text"

                    className="form--input"

                />

                <button 

                    className="form--button"

                    onClick={getMemeImage}

                >

                    Get a new meme image 🖼

                </button>

            </form>
            
            <button onClick={addItem}>Add item</button>

            {thingsElements}

        </main>

    )

}