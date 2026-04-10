import NoteCard from './NoteCard';

const NoteList = ({ notes, onDeleteNote }) => {
  if (!notes || notes.length === 0) {
    return (
      <section className="note-list" style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Your Notes</h2>
        <p style={{ color: '#64748b', fontStyle: 'italic' }}>No notes yet. Create your first one!</p>
      </section>
    );
  }

  return (
    <section className="note-list" style={{ marginTop: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Your Notes</h2>
      <div className="notes-container" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {notes.map(note => (
          <NoteCard key={note.id} note={note} onDelete={() => onDeleteNote(note.id)} />
        ))}
      </div>
    </section>
  );
};

export default NoteList;
