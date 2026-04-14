const notifiedTasks = new Set();

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.warn('This browser does not support desktop notifications');
    return 'unsupported';
  }

  if (Notification.permission === 'default') {
    return await Notification.requestPermission();
  }

  return Notification.permission;
};

export const sendNotification = (title, body, options = {}) => {
  if (Notification.permission === 'granted') {
    return new Notification(title, {
      body,
      icon: '/vite.svg', // generic fallback icon
      ...options
    });
  }
  return null;
};

export const checkTasksDue = (tasks) => {
  if (!tasks || !tasks.length) return;

  const now = new Date();
  const sixtyMinsFromNow = new Date(now.getTime() + 60 * 60 * 1000);

  tasks.forEach(task => {
    if (task.isCompleted || !task.dueDate) return;

    const due = new Date(task.dueDate);

    // Check if due date is in the future but within the next 60 minutes
    if (due > now && due <= sixtyMinsFromNow) {
      // Use mongodb _id or fallback to frontend id
      const taskId = task._id || task.id;

      if (!notifiedTasks.has(taskId)) {
        sendNotification(
          'Task Due Soon! ⏰',
          `Your task "${task.title}" is due at ${due.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
        );
        notifiedTasks.add(taskId);
      }
    }
  });
};
