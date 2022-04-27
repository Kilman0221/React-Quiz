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

    </main>
  );
}

