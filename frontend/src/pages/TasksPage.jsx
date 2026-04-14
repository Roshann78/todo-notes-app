import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SkeletonCard from '../components/SkeletonCard';
import EmptyState from '../components/EmptyState';
import useTasks from '../hooks/useTasks';
import { motion } from 'framer-motion';

const TasksPage = () => {
  const { tasks, loading, error, addTask, toggleTask, deleteTask } = useTasks();

  if (loading) {
    return (
      <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="page-title">Tasks</h1>
        <div className="tasks-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SkeletonCard lines={1} />
          <SkeletonCard lines={1} />
          <SkeletonCard lines={1} />
        </div>
      </motion.div>
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
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <h1 className="page-title">Tasks</h1>
      <TaskForm onAddTask={addTask} />
      {tasks.length === 0 ? (
        <EmptyState 
          icon="✅"
          heading="No tasks yet"
          subtext="Add your first task to get started"
        />
      ) : (
        <TaskList 
          tasks={tasks} 
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask} 
        />
      )}
    </motion.div>
  );
};

export default TasksPage;
