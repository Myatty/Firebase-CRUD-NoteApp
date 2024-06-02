import AddNote from './Components/AddNote'
import './App.css'
import Note from './Components/Note'
import Nav from './Components/Nav'
import { useEffect, useState } from 'react'

function App() {

  //define state
  const [notes, setNotes] = useState([]);

  //Without clicking the button
  // useEffect(() => {
  //   getNotes();
  // }, []);

  // Gets notes
  const getNotes = async () => {
    
    const response = await fetch("https://firenote-25f71-default-rtdb.firebaseio.com/notes.json");
    const notes = await response.json();

    const modifiedNotes = [];

    for (const key in notes){
      modifiedNotes.push(notes[key])
    }
    setNotes(modifiedNotes);
  }

  return (
    <>
      <Nav getNotes={getNotes}/>
      <AddNote />
      {
        notes.map((note, index) => (
          <Note key={index} note={note}/>
        ))
      }
    </>
  )
}

export default App
