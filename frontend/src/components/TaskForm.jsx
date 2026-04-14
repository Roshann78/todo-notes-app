import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    // Pass null if dueDate is empty so database uses undefined, not empty string
    onAddTask(title.trim(), dueDate ? new Date(dueDate).toISOString() : null);
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container task-form">
      <div className="input-group">
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
      <div className="input-group">
        <label htmlFor="dueDate" className="input-label">Due Date (Optional)</label>
        <input 
          type="datetime-local" 
          id="dueDate" 
          name="dueDate" 
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="input-field"
        />
      </div>
      <button type="submit" className="btn-submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
