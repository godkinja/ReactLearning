import React from "react";

export default function Arrays() {

    const nums = [1, 2, 3, 4, 5]

    const squares = nums.map(function(num) {

        return num * num

    })

    console.log(squares)

    const names = ["alice", "bob", "charlie", "danielle"]

    const capitalLetter = names.map(function(name) {
        
        return name[0].toUpperCase() + name.slice(1)

    })

    console.log(capitalLetter)

    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

    const stringHtml = pokemon.map(function(poke) {

        return `<p>${poke}</p>`

    })

    console.log(stringHtml)

    return (

        <>
        
        </>

    )

}