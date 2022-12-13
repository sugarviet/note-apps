import React from 'react'
import AddNotes from './AddNotes'
import Note from './Note'
// import {useNote} from '../contexts/NoteProvider'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
//   const {notes} = useNote();
  return (
    <div className='notes-list'>
        {notes.map(note => (
            <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
        ))}
        <AddNotes handleAddNote={handleAddNote}/>
        </div>
  )
}

export default NotesList

// {notes, setNotes}