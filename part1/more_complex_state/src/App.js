import {useState} from 'react'


function App() {
  const [value, setValue] = useState(10)
  const handleClick = (newValue) => {
    return () => {
      setValue(newValue)
    }
  }
     
  return(
    <div>
      <div>{value}</div>
      <button onClick={handleClick(1000)}>Thousand</button>
      <button onClick={handleClick(0)}>Reset</button>
      <button onClick={handleClick(value + 1)}>Increment</button>
    </div>
  )  
}

export default App;
