const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}
const App = () => {
  const family = [
    {name: "Sebastian", age: 3}, {name: "Natalya", age: 34}, {name: "Isabelle", age: 1} 
  ]
  return (
      <>
        <p>{family[0].name}</p>
        <p>{family[1].name}</p>
        <p>{family[2].name}</p>
      </>
    )
}
export default App