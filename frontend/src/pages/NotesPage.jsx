import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import useNotes from '../hooks/useNotes';

const NotesPage = () => {
  const { notes, loading, error, addNote, deleteNote } = useNotes();

  if (loading) {
    return (
      <div className="page-container">
        <h1 className="page-title">Notes</h1>
        <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.7 }}>Loading notes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <h1 className="page-title">Notes</h1>
        <div style={{ padding: '1rem', background: '#ff444420', color: '#ff4444', borderRadius: '8px', textAlign: 'center' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Notes</h1>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default NotesPage;
