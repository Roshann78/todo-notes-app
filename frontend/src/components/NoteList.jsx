import NoteCard from './NoteCard';

const SAMPLE_NOTES = [
  {
    id: '1',
    title: 'Grocery List',
    body: 'Milk, Eggs, Bread, Butter, Coffee',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Project Ideas',
    body: '- Build a MERN stack app\n- Learn Docker\n- Review React patterns',
    createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
  }
];

const NoteList = () => {
  return (
    <section className="note-list" style={{ marginTop: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Your Notes</h2>
      <div className="notes-container" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {SAMPLE_NOTES.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
};

export default NoteList;
