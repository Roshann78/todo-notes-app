import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAddTask(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      <div className="input-group" style={{ margin: 0, flexGrow: 1 }}>
        <label htmlFor="title" className="input-label">New Task</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?" 
          className="input-field"
          required
        />
      </div>
      <button type="submit" className="btn-submit" style={{ whiteSpace: 'nowrap' }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
