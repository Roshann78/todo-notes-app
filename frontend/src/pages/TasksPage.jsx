import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import useTasks from '../hooks/useTasks';

const TasksPage = () => {
  const { tasks, loading, error, addTask, toggleTask, deleteTask } = useTasks();

  if (loading) {
    return (
      <div className="page-container">
        <h1 className="page-title">Tasks</h1>
        <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.7 }}>Loading tasks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <h1 className="page-title">Tasks</h1>
        <div style={{ padding: '1rem', background: '#ff444420', color: '#ff4444', borderRadius: '8px', textAlign: 'center' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Tasks</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask} 
      />
    </div>
  );
};

export default TasksPage;
