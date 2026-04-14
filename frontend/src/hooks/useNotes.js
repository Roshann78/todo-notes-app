import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get('/api/notes');
      setNotes(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (title, body) => {
    try {
      setError(null);
      await axiosInstance.post('/api/notes', { title, body });
      await fetchNotes();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add note');
    }
  };

  const deleteNote = async (id) => {
    try {
      setError(null);
      await axiosInstance.delete(`/api/notes/${id}`);
      await fetchNotes();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to delete note');
    }
  };

  const updateNote = async (id, title, body) => {
    try {
      setError(null);
      await axiosInstance.put(`/api/notes/${id}`, { title, body });
      await fetchNotes();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update note');
    }
  };

  return { notes, loading, error, addNote, deleteNote, updateNote, fetchNotes };
};

export default useNotes;
