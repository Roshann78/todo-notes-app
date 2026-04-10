const NOTES_STORAGE_KEY = 'mern_notes';
const TASKS_STORAGE_KEY = 'mern_tasks';

// =======================
// NOTES UTILS
// Object shape: { id, title, body, createdAt }
// =======================

export const getNotes = () => {
  const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
  return storedNotes ? JSON.parse(storedNotes) : [];
};

export const saveNotes = (notesArray) => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notesArray));
};

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
