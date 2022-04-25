import React from "react";
import StartScreen from "./components/StartScreen"
import Quiz from "./components/Quiz"

export default function App() {

  const [firstGame, setFirstGame] = React.useState(true);
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);


  function handleFirstGame() {
    setFirstGame(prevGame => {
      return !prevGame
    })
  }



  return (
    <main>
      {firstGame ?
        <StartScreen
          handleChange={handleFirstGame}
        />
        :
        <Quiz
          handleClick={forceUpdate}
        />
      }

    </main>
  );
}

