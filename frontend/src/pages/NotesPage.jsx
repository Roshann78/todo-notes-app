import { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, saveNotes, generateId } from '../utils/localStorage';

const NotesPage = () => {
  const [notes, setNotes] = useState(() => getNotes());

  // Save notes to localStorage whenever the array changes
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
    // Add new note to the beginning of the array
    setNotes(prevNotes => [newNote, ...prevNotes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Notes Page</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default NotesPage;
