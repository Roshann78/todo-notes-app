const TaskItem = ({ task, onToggle, onDelete }) => {
  const formattedDate = new Date(task.createdAt).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric'
  });

  return (
    <article className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.isCompleted} 
          onChange={onToggle}
          className="task-checkbox"
        />
        <div className="task-text">
          <h3 className="task-title">{task.title}</h3>
          <span className="card-footer" style={{ marginTop: '0.25rem' }}>{formattedDate}</span>
        </div>
      </div>
      <button 
        type="button" 
        onClick={onDelete}
        className="btn-delete"
        title="Delete task"
        style={{ marginLeft: '1rem' }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
        </svg>
      </button>
    </article>
  );
};

export default TaskItem;
