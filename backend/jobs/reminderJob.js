const Task = require('../models/Task');

const checkUpcomingTasks = async () => {
  try {
    const now = new Date();
    const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

    // Find tasks that are not completed and are due in the next hour
    const upcomingTasks = await Task.find({
      isCompleted: false,
      dueDate: {
        $gte: now,
        $lte: oneHourFromNow
      }
    });

    if (upcomingTasks.length > 0) {
      upcomingTasks.forEach(task => {
        // Just log for now. This is where you would trigger an email.
        console.log(`Reminder: Task '${task.title}' for user ${task.userId} is due at ${task.dueDate}`);
      });
    }
  } catch (error) {
    console.error('Error running checkUpcomingTasks block:', error);
  }
};

module.exports = {
  checkUpcomingTasks
};
