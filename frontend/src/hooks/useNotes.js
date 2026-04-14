import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import toast from 'react-hot-toast';

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
      const msg = err.response?.data?.message || err.message || 'Failed to fetch notes';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
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
      toast.success("Note created!");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to add note';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const deleteNote = async (id) => {
    try {
      setError(null);
      await axiosInstance.delete(`/api/notes/${id}`);
      await fetchNotes();
      toast.success("Note deleted");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to delete note';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const updateNote = async (id, title, body) => {
    try {
      setError(null);
      await axiosInstance.put(`/api/notes/${id}`, { title, body });
      await fetchNotes();
      // Added a toast for update since the pattern applies
      toast.success("Note updated");
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to update note';
      setError(msg);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return { notes, loading, error, addNote, deleteNote, updateNote, fetchNotes };
};

export default useNotes;
