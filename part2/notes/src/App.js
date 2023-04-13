import Note from "./components/Note";
import { useState, useEffect } from "react";
import noteService from './services/notes'
const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll()
    .then((response) => {
      setNotes(response.data);
    });
  }, []);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    
      noteService.create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
    })
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id)
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote)
    .then(response => {
      setNotes(notes.map((note) => note.id !== id ? note: changedNote))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;