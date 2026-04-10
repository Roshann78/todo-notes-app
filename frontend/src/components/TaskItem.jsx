const TaskItem = ({ task, onToggle, onDelete }) => {
  const formattedDate = new Date(task.createdAt).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric'
  });

  return (
    <article 
      className="task-item" 
      style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
        border: '1px solid #e2e8f0', padding: '0.75rem', borderRadius: '8px', 
        marginBottom: '0.5rem', backgroundColor: '#f8fafc',
        opacity: task.isCompleted ? 0.7 : 1
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
        <input 
          type="checkbox" 
          checked={task.isCompleted} 
          onChange={onToggle}
          style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ 
            margin: 0, fontSize: '1.1rem', 
            textDecoration: task.isCompleted ? 'line-through' : 'none',
            color: task.isCompleted ? '#64748b' : 'inherit'
          }}>
            {task.title}
          </h3>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{formattedDate}</span>
        </div>
      </div>
      <button 
        type="button" 
        onClick={onDelete}
        style={{ cursor: 'pointer', backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '4px', padding: '0.25rem 0.5rem', marginLeft: '1rem' }}
      >
        Delete
      </button>
    </article>
  );
};

export default TaskItem;
