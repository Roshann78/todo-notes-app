import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty tasks
    
    onAddTask(title.trim());
    setTitle(''); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} className="task-form" style={{ display: 'flex', gap: '0.5rem', maxWidth: '600px', marginBottom: '2rem', alignItems: 'flex-end' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flexGrow: 1 }}>
        <label htmlFor="title" style={{ fontWeight: 'bold' }}>New Task</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?" 
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
      </div>
      <button 
        type="submit" 
        style={{ padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', height: 'fit-content' }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
