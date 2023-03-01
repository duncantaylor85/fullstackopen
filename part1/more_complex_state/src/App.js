import {useState} from 'react'


function App() {
  const [value, setValue] = useState(10)
  const hello = (who) => () => console.log("Hello", who)
    
     
  return(
    <div>
      <button onClick={hello("world")}>world</button>
      <button onClick={hello("react")}>react</button>
    </div>
  )  
}

export default App;
