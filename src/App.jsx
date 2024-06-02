/* eslint-disable no-unused-vars */
import AddNote from "./Components/AddNote";
import "./App.css";
import Note from "./Components/Note";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
import Intro from "./Components/Intro";

function App() {
  //define state
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Without clicking the button
  useEffect(() => {
    getNotes();
  }, []);

  // Gets notes
  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://firenote-25f71-default-rtdb.firebaseio.com/notes.json"
      );

      if (!response.ok) {
        throw new Error("Cannot connect to the firebase");
      }
      const notes = await response.json();

      const modifiedNotes = [];

      for (const key in notes) {
        modifiedNotes.push({
          id: key,
          note: notes[key], 
        });
      }
      setNotes(modifiedNotes);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Nav getNotes={getNotes} totalNotes={notes.length} />
      
      {
        loading && <p className="message">Getting Notes</p>
      }
      {
        error && <p className="error-message">{error}</p>
      }
      {!loading && !error && (
        <>
        <AddNote getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={index} note={note} getNotes={getNotes}/>
          ))}
        </>
      )}
      {
        notes.length === 0 && <Intro />
      }
    </>
  );
}

export default App;
