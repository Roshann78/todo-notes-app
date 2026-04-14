import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <section className="list-section">
        <h2 className="section-title">Your Tasks</h2>
        <div className="empty-state">No tasks yet. Add your first one above!</div>
      </section>
    );
  }

  return (
    <section className="list-section">
      <h2 className="section-title">Your Tasks</h2>
      <div className="tasks-container" style={{ display: 'flex', flexDirection: 'column' }}>
        {tasks.map(task => {
          const id = task._id || task.id;
          return (
            <TaskItem 
              key={id} 
              task={task} 
              onToggle={() => onToggleTask(id)} 
              onDelete={() => onDeleteTask(id)} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default TaskList;
