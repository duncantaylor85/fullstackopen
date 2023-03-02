import {useState} from 'react'

const Button = props => 
  (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const Display = (props) => {
  return(
    <div>{props.value}</div>
  )
}


function App() {
  const [value, setValue] = useState(10)
  const setToValue = (newValue) => {
    setValue(newValue)
  }
  return(
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="Thousand" />
      <Button handleClick={() => setToValue(0)} text="Reset" />
      <Button handleClick={() => setToValue(value + 1)} text="Increment" />
    </div>
  )  
}

export default App;
