import { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    
    onAddNote(title.trim(), body.trim());
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-group">
        <label htmlFor="title" className="input-label">Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's this note about?" 
          className="input-field"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="body" className="input-label">Details</label>
        <textarea 
          id="body" 
          name="body" 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4" 
          placeholder="Write your thoughts here..."
          className="input-field"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-submit">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
