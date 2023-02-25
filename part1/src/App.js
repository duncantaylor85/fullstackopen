const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name="Natalya"/> 
      <Hello name="Sebastian"/> 
      <Hello name="Isabelle"/>
    </div>
    )
}
export default App