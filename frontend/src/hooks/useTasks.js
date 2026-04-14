import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import toast from 'react-hot-toast';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get('/api/tasks');
      setTasks(response.data);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to fetch tasks';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title, dueDate = null) => {
    try {
      setError(null);
      await axiosInstance.post('/api/tasks', { title, dueDate });
      await fetchTasks();
      toast.success("Task added!");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to add task';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const toggleTask = async (id) => {
    try {
      setError(null);
      // We can optimistically update or just call API and refetch
      await axiosInstance.patch(`/api/tasks/${id}/toggle`);
      await fetchTasks();
      toast.success("Task updated");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to toggle task';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const deleteTask = async (id) => {
    try {
      setError(null);
      await axiosInstance.delete(`/api/tasks/${id}`);
      await fetchTasks();
      toast.success("Task deleted");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to delete task';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const updateTask = async (id, data) => {
    try {
      setError(null);
      await axiosInstance.put(`/api/tasks/${id}`, data);
      await fetchTasks();
      toast.success("Task updated");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to update task';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return { tasks, loading, error, addTask, toggleTask, deleteTask, updateTask, fetchTasks };
};

export default useTasks;
