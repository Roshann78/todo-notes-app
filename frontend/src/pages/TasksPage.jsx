import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasks, saveTasks, generateId } from '../utils/localStorage';

const TasksPage = () => {
  const [tasks, setTasks] = useState(() => getTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddTask = (title) => {
    const newTask = {
      id: generateId(),
      title,
      isCompleted: false,
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const handleToggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Tasks</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
};

export default TasksPage;
