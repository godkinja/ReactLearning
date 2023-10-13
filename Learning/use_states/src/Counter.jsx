import React, { useState } from "react"

export default function App() {
    
    const [count, setCount] = useState(0)

    function increment(){

        setCount(count + 1)

    }

    function decrement(){

        setCount(count - 1)

    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrement}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={increment}>+</button>
        </div>
    )
}
