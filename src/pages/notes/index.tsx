import { useState, useEffect } from "react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { v4 as uuid } from "uuid";
import { ProtectedRoutes } from "../../common/ProtectedRoutes";
import { NotesService } from "../../service/NotesSevice";
import { useUserState } from "../../hooks/useUserState";
import { File } from "../../dtos/NotesDto";
import { doc, onSnapshot } from "firebase/firestore";
import db from './../../config/FirebaseConfig'
export const Notes=()=> {
  //states
  const [notes, setNotes] = useState<File[]>([]);
  const [inputText, setInputText] = useState("");
  const {user} = useUserState()

  // get text and store in state
  const textHandler = (e : any) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = async () => {
    let file : File ={
      id: uuid(),
      data: inputText,
      fileType:'text'
    }
    if(user && user.email){
      await new NotesService().updateOrCreateFile(user.email,file)  
    }
    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = async (id: string) => {
    if(user && user.email){
      await new NotesService().deleteNote(user.email,id)
    }
  };

  // listen to data changes
  useEffect(() => {
    let unsub : any;
    if(user && user.email){
      unsub = onSnapshot( doc(db, 'tasks', user.email), (doc) => {
        let data = doc.data()
        if(data){
          setNotes([...data.files])
        }
      })
      
    }
    return ()=>{
      if(unsub){
        unsub()
      }
    }
  }, [user?.email]);

  return (
    <ProtectedRoutes>
    <div className="notes">
    <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
      {notes.map((note : File ) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.data}
          deleteNote={deleteNote}
        />
      ))}
    
    </div>
    </ProtectedRoutes>
  );
}

export default Notes;
