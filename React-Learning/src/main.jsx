import React from 'react'
import ReactDOM from 'react-dom/client'

const page = (

  <div>

    <img src="/react-logo.png" alt="React Logo" width={150} />

    <h1>Fun facts about React</h1>

    <ul>

      <li>Was first released in 2013</li>

      <li>Was originally created by Jordan Walke</li>

      <li>Has well over 100k start on Github</li>

      <li>Is maintained by Facebook</li>

      <li>Powers thousands of enterprise apps, including mobile apps</li>

    </ul>

  </div>

)

ReactDOM.createRoot(document.getElementById('root')).render(page)

/*
1. Why do we need to `import React from "react"` in our files?

React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?

A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:

const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)

We need our JSX to be nested under a single parent element


4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?

We have small pieces that we can put together to make something
larger/greater than the individual pieces.
*/