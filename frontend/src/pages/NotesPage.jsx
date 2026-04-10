import { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, saveNotes, generateId } from '../utils/localStorage';

const NotesPage = () => {
  const [notes, setNotes] = useState(() => getNotes());

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const handleAddNote = (title, body) => {
    const newNote = {
      id: generateId(),
      title,
      body,
      createdAt: new Date().toISOString()
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default NotesPage;
