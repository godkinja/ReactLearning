import { useState } from "react";

export default function App() {

  /*function greeting(name){

    const date = new Date();

    const hours = date.getHours();

    let timeOfDay;

    if (hours >= 4 && hours < 12){

      timeOfDay = "morning";

    } else if (hours >= 12 && hours < 17){

      timeOfDay = "afternoon";

    } else if (hours >= 17 && hours < 20){

      timeOfDay = "evening";

    } else {

      timeOfDay = "night";

    }

    return `Good ${timeOfDay} ${name}`;

  }

  console.log(greeting("John"))*/

  const [isImportant, setIsImportante] = useState("Yes"); // [value, function] 

  function handleClick(){

    setIsImportante("No");

  }

  console.log(isImportant);
    
  return (

      <div className="state">

          <h1 className="state--title">Is state important to know?</h1>

          <div className="state--value" onClick={handleClick}>

              <h1>{isImportant}</h1>

          </div>

      </div>

  )

}

