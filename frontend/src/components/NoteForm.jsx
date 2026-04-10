import { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return; // Don't submit empty values
    
    // Pass values up to the parent component
    onAddNote(title.trim(), body.trim());
    
    // Clear inputs after successful submission
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="title" style={{ fontWeight: 'bold' }}>Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..." 
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="body" style={{ fontWeight: 'bold' }}>Body</label>
        <textarea 
          id="body" 
          name="body" 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4" 
          placeholder="Enter note content..."
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          required
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
