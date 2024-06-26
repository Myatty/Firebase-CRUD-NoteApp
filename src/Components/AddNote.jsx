/* eslint-disable react/prop-types */
import { useState } from "react";

const AddNote = ({getNotes}) => {
  //define state
  const [note, setNote] = useState("");

  const addNote = async (e) => {
    e.preventDefault();

    if (note.trim().length === 0 ) {
      alert("Please enter a valid Note!");
      return;
    }

    try {
      await fetch(
        "https://firenote-25f71-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setNote("");
      getNotes();
    } catch (error) {
      alert("Something went Wrong!");
    }
  };

  return (
    <section>
      <form action="" className="card" onSubmit={addNote}>
        <input
          type="text"
          placeholder="Add Note Here"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button className="submit-btn">Add Note</button>
      </form>
    </section>
  );
};

export default AddNote;
