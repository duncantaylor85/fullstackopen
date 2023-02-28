import { useState } from "react";

const Display = ({counter}) => {
  return(
    <div>{counter}</div>
  )
}

const Button = ({onClick, name}) => {
  return(
    <button onClick={onClick}>{name}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1) 
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  

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
