const NoteCard = ({ note, onDelete }) => {
  // Format the date using the browser's locale
  const formattedDate = new Date(note.createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <article className="note-card" style={{ border: '1px solid #e2e8f0', padding: '1.25rem', borderRadius: '8px', marginBottom: '1rem', backgroundColor: '#f8fafc' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{note.title}</h3>
        <button 
          type="button" 
          onClick={onDelete}
          style={{ cursor: 'pointer', backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '4px', padding: '0.25rem 0.5rem' }}
        >
          Delete
        </button>
      </header>
      <p style={{ whiteSpace: 'pre-wrap', margin: '0 0 1rem 0', lineHeight: 1.5 }}>{note.body}</p>
      <footer style={{ fontSize: '0.85rem', color: '#64748b' }}>
        <time dateTime={note.createdAt}>{formattedDate}</time>
      </footer>
    </article>
  );
};

export default NoteCard;
