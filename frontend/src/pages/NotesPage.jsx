import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import SkeletonCard from '../components/SkeletonCard';
import EmptyState from '../components/EmptyState';
import useNotes from '../hooks/useNotes';
import { motion } from 'framer-motion';

const NotesPage = () => {
  const { notes, loading, error, addNote, deleteNote } = useNotes();

  if (loading) {
    return (
      <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="page-title">Notes</h1>
        <div className="grid-container">
          <SkeletonCard lines={3} />
          <SkeletonCard lines={4} />
          <SkeletonCard lines={2} />
        </div>
      </motion.div>
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
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <h1 className="page-title">Notes</h1>
      <NoteForm onAddNote={addNote} />
      {notes.length === 0 ? (
        <EmptyState 
          icon="📝"
          heading="No notes yet"
          subtext="Click 'Add Note' to get started"
        />
      ) : (
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      )}
    </motion.div>
  );
};

export default NotesPage;
