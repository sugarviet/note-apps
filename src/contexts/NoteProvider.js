import React, {useContext, useState} from 'react'
import {nanoid} from 'nanoid'


const NoteContext = React.createContext();

export function useNote(){
    return useContext(NoteContext);
}

export function NoteProvider({children}) {
    const [notes, setNotes] = useState([
        {
          id: nanoid(),
          text: "this is my first note",
          date: "15/04/2022"
        },
        {
          id: nanoid(),
          text: "this is my second note",
          date: "25/04/2022"
        },
        {
          id: nanoid(),
          text: "this is my third note",
          date: "10/06/2022"
        },
        {
          id: nanoid(),
          text: "this is my forth note",
          date: "25/08/2022"
        }
      ]);
    //   const addNote = (text) => {
    //     console.log(text);
    //   }
  return (
    <NoteContext.Provider value={{notes, addNote}}>
        {children}
    </NoteContext.Provider>
  )
}
