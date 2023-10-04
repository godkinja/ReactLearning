export default function App() {

  function handleClick() {

    console.log('Button clicked');

  }

  function imageHover() {

    console.log('Image hovered');

  }

  function imageClick() {

    console.log('Image clicked');

  }

  return (
    <>

      <div className="container">

          <img src="https://picsum.photos/640/360" onMouseOver={imageHover} onClick={imageClick} />

          <button onClick={handleClick}>Click me</button>

      </div>

    </>
  )
}

