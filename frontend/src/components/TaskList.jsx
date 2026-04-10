import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <section className="task-list" style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Your Tasks</h2>
        <p style={{ color: '#64748b', fontStyle: 'italic' }}>No tasks yet. Add your first one!</p>
      </section>
    );
  }

  return (
    <section className="task-list" style={{ marginTop: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Your Tasks</h2>
      <div className="tasks-container" style={{ display: 'flex', flexDirection: 'column' }}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={() => onToggleTask(task.id)} 
            onDelete={() => onDeleteTask(task.id)} 
          />
        ))}
      </div>
    </section>
  );
};

export default TaskList;
