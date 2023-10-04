import React from 'react'
import ReactDOM from 'react-dom/client'
import Cards from './components/Cards.jsx'
import Joke from './components/Joke.jsx'
import Arrays from './components/Arrays.jsx'
import jokesData from './jokesData.js'


export default function App() {

  const firstName = 'John'

  const lastName = 'Doe'

  const date = new Date()

  const hours = date.getHours() % 12

  let timeOfDay

  if (hours < 12) {

    timeOfDay = 'morning'

  } else if (hours >= 12 && hours < 17) {

    timeOfDay = 'afternoon'

  } else {

    timeOfDay = 'night'

  }

  const colors = [

    <h3>Red</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Yellow</h3>

  ]

  const jokeElements = jokesData.map(joke => {

    return <Joke 
    
      setup={joke.setup}

      punchline={joke.punchline}
    
    />

  })

  return (
    <>

      <h1>Hello {firstName} {lastName}!</h1>

      <h1>It is currently about {date.getHours() % 12} o'clock!</h1>

      <h1>It is currently about {hours} o'clock!</h1>

      <h1>Good {timeOfDay}</h1>

      <div className="contacts">

        <Cards 
          img = "mr-whiskerson.png"
          name = "Mr. Whiskerson"
          phone = "(212) 555-1234"
          email = "mr.whiskaz@catnap.meow"
        />

        <Cards 
        
          img = "fluffykins.png"
          name = "Fluffykins"
          phone = "(212) 555-2345"
          email = "fluff@me.com"
        
        />

        <Cards 
        
          img = "felix.png"
          name = "Felix"
          phone = "(212) 555-4567"
          email = "thecat@hotmail.com"      
        
        />

        <Cards 
        
          img = "pumpkin.png"
          name = "Pumpkin"
          phone = "(0000) CAT KING"
          email = "pumpkin@scrimba.com"
        
        
        />

      </div>

      <h1>Jokes</h1>

      <Joke 
          punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
          isPun={false}
          upvotes={10}
          downvotes={5}
          comments={[{author: "", body: "", title: ""}]}
      />

      <Joke 
          setup="I got my daughter a fridge for her birthday." 
          punchline="I can't wait to see her face light up when she opens it."
          isPun={true}
          upvotes={10}
          downvotes={5}
          comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
          setup="How did the hacker escape the police?" 
          punchline="He just ransomware!"
          isPun={true}
          upvotes={10}
          downvotes={5}
          comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
          setup="Why don't pirates travel on mountain roads?" 
          punchline="Scurvy." 
          isPun={false} 
          upvotes={10}
          downvotes={5}
          comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
          setup="Why do bees stay in the hive in the winter?" 
          punchline="Swarm."
          isPun={true}
          upvotes={10}
          downvotes={5}
          comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
          setup="What's the best thing about Switzerland?" 
          punchline="I don't know, but the flag is a big plus!"
          isPun={false} 
          upvotes={10}
          downvotes={5}
          comments={[{author: "", body: "", title: ""}]}
      />

      <Arrays />

      {colors}

      {jokeElements}

    </>
  )
}