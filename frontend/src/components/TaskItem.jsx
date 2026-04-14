import { motion } from 'framer-motion';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const formattedCreatedDate = new Date(task.createdAt).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric'
  });

  const getTaskStatus = (dueDate, isCompleted) => {
    if (!dueDate) return 'grey'; // no due date -> grey
    if (isCompleted) return 'grey'; 
    
    const now = new Date();
    const due = new Date(dueDate);
    const timeDiff = due.getTime() - now.getTime();

    if (timeDiff < 0) return 'red'; // overdue -> red
    
    // due today -> orange
    if (
      due.getDate() === now.getDate() &&
      due.getMonth() === now.getMonth() &&
      due.getFullYear() === now.getFullYear()
    ) {
      return 'orange';
    }

    // due soon (within 72 hours) -> yellow
    if (timeDiff > 0 && timeDiff <= 72 * 60 * 60 * 1000) {
      return '#FFD700'; // yellow/gold
    }

    return 'green'; // upcoming -> green
  };

  const borderColor = getTaskStatus(task.dueDate, task.isCompleted);

  return (
    <motion.article 
      className={`task-item ${task.isCompleted ? 'completed' : ''}`} 
      style={{ borderLeft: `6px solid ${borderColor}` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
    >
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.isCompleted} 
          onChange={onToggle}
          className="task-checkbox"
        />
        <div className="task-text">
          <h3 className="task-title">{task.title}</h3>
          {task.dueDate && (
            <div className="task-due-date" style={{ color: borderColor !== 'grey' ? borderColor : 'inherit', fontSize: '0.85rem', fontWeight: '500', marginTop: '0.2rem' }}>
              Due: {new Date(task.dueDate).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </div>
          )}
          <span className="card-footer" style={{ marginTop: '0.25rem', display: 'block' }}>Created: {formattedCreatedDate}</span>
        </div>
      </div>
      <button 
        type="button" 
        onClick={onDelete}
        className="btn-delete"
        title="Delete task"
        style={{ marginLeft: '1rem' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
        </svg>
      </button>
    </motion.article>
  );
};

export default TaskItem;
