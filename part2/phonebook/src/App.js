import { useState, useEffect } from "react";
import Name from "./components/Name";
import namesService from "./services/names";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    namesService.getAll().then((response) => setPersons(response));
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const personFound = persons.find((person) => person.name === newName);
    if (personFound) {
      const shouldUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace the old number?`
      );
      if (shouldUpdate) {
        const updatedPerson = { ...personFound, number: newNumber };
        namesService
          .update(personFound.id, updatedPerson)
          .then((updatedData) => {
            setPersons(
              persons.map((person) =>
                person.id === personFound.id ? updatedData : person
              )
            );
          })
          .catch((error) => {
            console.error("Error updating person:", error);
          });
      }
    } else {
      const nameObject = { name: newName, number: newNumber };
      namesService
        .create(nameObject)
        .then((response) => setPersons(persons.concat(response)));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ padding: 0, listStyleType: "none" }}>
        {persons.map((person) => (
          <Name key={person.id} person={person} refreshPersons={setPersons} />
        ))}
      </ul>
    </div>
  );
};
export default App;
