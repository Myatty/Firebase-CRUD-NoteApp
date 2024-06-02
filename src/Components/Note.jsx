/* eslint-disable react/prop-types */

import DeleteIcon from "../svg/DeleteIcon"

const Note = ({note, getNotes}) => {

  const {note: text , id} = note;

  const deleteNote = async () => {

    try {
      const response = await fetch(`https://firenote-25f71-default-rtdb.firebaseio.com/notes/${id}.json`,{
      method: "DELETE",
    });

    if(!response.ok){
      throw new Error("Failed to Delete");
    }
    getNotes();
    } catch (error) {
      console.log();
    }
    

  }

  return (
    <div className="card card-ctr">
        <h3> * {text}</h3>
        <div onClick={deleteNote}>
        <DeleteIcon  />
        </div>
    </div>
  )
}

export default Note