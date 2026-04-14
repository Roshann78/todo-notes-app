import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

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
      setError(err.response?.data?.message || err.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    try {
      setError(null);
      await axiosInstance.post('/api/tasks', { title });
      await fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add task');
    }
  };

  const toggleTask = async (id) => {
    try {
      setError(null);
      // We can optimistically update or just call API and refetch
      await axiosInstance.patch(`/api/tasks/${id}/toggle`);
      await fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to toggle task');
    }
  };

  const deleteTask = async (id) => {
    try {
      setError(null);
      await axiosInstance.delete(`/api/tasks/${id}`);
      await fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to delete task');
    }
  };

  const updateTask = async (id, data) => {
    try {
      setError(null);
      await axiosInstance.put(`/api/tasks/${id}`, data);
      await fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update task');
    }
  };

  return { tasks, loading, error, addTask, toggleTask, deleteTask, updateTask, fetchTasks };
};

export default useTasks;
