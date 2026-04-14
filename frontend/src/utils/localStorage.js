export const TASKS_STORAGE_KEY = 'mern_tasks';

// =======================
// TASKS UTILS
// Object shape: { id, title, isCompleted, createdAt }
// =======================

export const getTasks = () => {
  const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasksArray) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksArray));
};

// =======================
// ID GENERATOR
// =======================

export const generateId = () => {
  // Built into modern browsers: generates a secure unique ID string
  return crypto.randomUUID();
};
