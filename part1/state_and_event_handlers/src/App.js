import { useState } from "react";

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  

  return(
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} name={"plus"} />
      <Button onClick={decreaseByOne} name={"minus"} />
      <Button onClick={setToZero} name={"zero"} />
    </div>
  )
}

export default App;
