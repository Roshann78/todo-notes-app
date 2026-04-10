const NoteForm = () => {
  return (
    <form className="note-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="title" style={{ fontWeight: 'bold' }}>Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="Enter note title..." 
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="body" style={{ fontWeight: 'bold' }}>Body</label>
        <textarea 
          id="body" 
          name="body" 
          rows="4" 
          placeholder="Enter note content..."
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        ></textarea>
      </div>
      <button 
        type="submit" 
        style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
