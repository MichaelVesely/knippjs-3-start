import { useState } from "react"

import NumberInput from "./components/NumberInput.jsx"
import Result from "./components/Result.jsx"

function NumberGuessingGame() {

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100 + 1))
  const [number, setNumber] = useState(50);
  const [text, setText] = useState("Geben Sie eine Zahl von 1 bis 100 ein.")

  const handleClick = (e) => {
      if (number > randomNumber) {
        setText("Die gesuchte Zahl ist kleiner.")
    } else if (number < randomNumber) {
        setText("Die gesuchte Zahl ist größer.")
    } else if (number === randomNumber) {
        setText("Richtig! Die gesuchte Zahl ist " + number + "!")
    }
  }

  return (
    <div>
      <h1>Zahlenratespiel</h1>
      <NumberInput number={number} setNumber={setNumber} />
      <button onClick={handleClick}>Zahl prüfen</button>
      <Result text={text}/>
    </div>
  );
}

export default NumberGuessingGame;
