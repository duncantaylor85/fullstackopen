import namesService from "../services/names"


const Name = ({person, refreshPersons}) => {

    const removePerson = (id) => {
        if(window.confirm(`Delete ${person.name}?`)) {
            namesService.remove(id);
            refreshPersons((prevState=> prevState.filter(person=> person.id !== id)));
        }

    }

    return(
    <div>
        <li>{person.name} {person.number}</li>
        <button onClick={() => removePerson(person.id)}>delete</button>
    </div>
            )
}

export default Name