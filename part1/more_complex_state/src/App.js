import {useState} from 'react'

const History = (props) => {
  if(props.total === 0) {
  return(
      <div>the app is used by pressing the buttons</div>
  )
  }
  return(
    <div>{props.total}</div>
  )
}

function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const updatedLeft = clicks.left + 1
    setClicks({
      ... clicks,
      left: updatedLeft,
    })
    setTotal(updatedLeft + clicks.right)
  }
  const handleRightClick = () => {
    const updatedRight = clicks.right + 1
    setClicks({
      ... clicks,
      right: updatedRight 
    })
    setTotal(clicks.left + updatedRight)
  }
  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <History total={total} />
    </div>
  )  
}

export default App;
