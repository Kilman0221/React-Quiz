import React from "react";
import StartScreen from "./components/StartScreen"
import Quiz from "./components/Quiz"

export default function App() {

  const [game, setGame] = React.useState(true);


  function handleGame() {
    setGame(prevGame => {
      return !prevGame
    })
  }



  console.log("rendered")
  return (

    <main>
      {
        game ?
          <StartScreen
            handleChange={handleGame}
          />
          :
          <Quiz handleRestart={handleGame} />
      }
      <div className="blobs">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#DEEBF8" d="M44.4,-58.1C54.2,-44.7,56.5,-27.6,59.6,-10.5C62.6,6.6,66.5,23.6,62.2,40.5C57.9,57.4,45.5,74.3,28.8,81.4C12,88.5,-9.1,85.8,-27.7,78.2C-46.3,70.5,-62.3,57.9,-65.2,42.6C-68,27.4,-57.7,9.5,-52.2,-7C-46.6,-23.5,-45.9,-38.7,-38,-52.3C-30.1,-66,-15,-78.2,1.1,-79.6C17.3,-80.9,34.6,-71.4,44.4,-58.1Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFAD1" d="M47.9,-56.5C60.2,-46.8,66.9,-29.9,69.8,-12.4C72.7,5,71.8,22.9,65,40.2C58.2,57.4,45.5,73.8,29.4,79C13.2,84.2,-6.5,78,-22,68.8C-37.5,59.5,-48.9,47.2,-60.8,32.3C-72.6,17.5,-84.9,0.2,-79.9,-11.7C-75,-23.6,-52.8,-30.1,-36.6,-39.1C-20.4,-48.2,-10.2,-59.9,3.8,-64.4C17.8,-68.9,35.6,-66.3,47.9,-56.5Z" transform="translate(100 100)" />
        </svg>
      </div>
    </main>
  );
}

