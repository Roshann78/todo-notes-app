import NoteCard from './NoteCard';

const NoteList = ({ notes, onDeleteNote }) => {
  if (!notes || notes.length === 0) {
    return (
      <section className="list-section">
        <h2 className="section-title">Your Notes</h2>
        <div className="empty-state">No notes yet. Create your first one above!</div>
      </section>
    );
  }

  return (
    <section className="list-section">
      <h2 className="section-title">Your Notes</h2>
      <div className="grid-container">
        {notes.map(note => {
          const id = note._id || note.id; // Support both DB _id and old localStorage id
          return <NoteCard key={id} note={note} onDelete={() => onDeleteNote(id)} />
        })}
      </div>
    </section>
  );
};

export default NoteList;
