import NumberInput from "./components/NumberInput.jsx"
import Result from "./components/Result.jsx"

function NumberGuessingGame() {
  return (
    <div>
      <h1>Zahlenratespiel</h1>
      <NumberInput />
      <Result text="TEXT"/>
    </div>
  );
}

export default NumberGuessingGame;
