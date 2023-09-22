import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

//One way to do things is using Consts, but its preferable to use functions (Always capitalize the first letter of a function)

/*
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

function TemporaryName() {

  return(

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

}

function in /components/firstClass.jsx

ReactDOM.createRoot(document.getElementById('root')).render(page)

ReactDOM.createRoot(document.getElementById('root')).render(<TemporaryName/>)

DOM means Document Object Model. It's a tree-like structure

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


//Components

//Challenge:

function CustomPage() {

  return (

    <div>

      <h1>Why you should learn React</h1>

      <ol>

        <li>Because its intuitive and funny to learn</li>

        <li>We can benefit alot from knowing React</li>

        <li>Everything is easier with React</li>

      </ol>

    </div>

  )

}

//ReactDOM.createRoot(document.getElementById('root')).render(<CustomPage/>)

//Challenge 2:

function CustomPage2() {

  return (

    <div>

      <header>

        <nav>

          <img src="/react-logo.png" alt="React Logo" width={150} />

        </nav>

      </header>

      <h1>Why you should learn React</h1>

      <ol>

        <li>Because its intuitive and funny to learn</li>

        <li>We can benefit alot from knowing React</li>

        <li>Everything is easier with React</li>

      </ol>

      <footer>

        <small>© 2023 kinjA development. All rights reserved.</small>

      </footer>

    </div>

  )

}

//ReactDOM.createRoot(document.getElementById('root')).render(<CustomPage2/>)

1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}

A: Components should be capitalized

3. What's wrong with this code?
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))

A: We need to reference the function, not call it, using <Header/> instead of Header()

//Parent + Child Components

function Header(){

  return(

    <header>

      <nav className="nav">

        <img src="/react-logo.png" alt="React Logo" className="nav-logo" />

        <ul className="nav-items">

          <li>Pricing</li>

          <li>About</li>

          <li>Contact</li>

        </ul>

      </nav>

    </header>

  )

}

function List() {

  return(

    <div>

      <h1>Why you should learn React</h1>

      <ol>

        <li>Because its intuitive and funny to learn</li>

        <li>We can benefit alot from knowing React</li>

        <li>Everything is easier with React</li>

      </ol>

    </div>

  )

}

function Footer() {

  return(

    <footer>

      <small>© 2023 kinjA development. All rights reserved.</small>

    </footer>

  )

}

function Page() {

  return (

    <div>

      <Header/>

      <List />

      <Footer />

    </div>

  )

}

ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)

//Creation of Components to have a more organized code with functions being calle from another file
//Every file that has JSX needs to import React, aswell as having the export default function name, for example export default Header;

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function Page() {

  return (

    <div>

      <Header/>

      <MainContent />

      <Footer />

    </div>

  )

}

ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

*/

