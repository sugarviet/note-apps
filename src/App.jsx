import { useState } from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';
import { useEffect } from 'react';
// import { NoteProvider } from './contexts/NoteProvider'

function App() {
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

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
        id: nanoid(),
        text,
        date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  return (
    <div className={darkMode && 'dark-mode'}>
      <div className="container">
          <Header handleToggleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
          {/* <NotesList/> */}
        {/* </NoteProvider> */}
      </div>
    </div>
  )
}

export default App
