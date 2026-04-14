import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import toast from 'react-hot-toast';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // On app load, if a token exists, fetch the user
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await axiosInstance.get('/auth/me');
          setUser(res.data);
        } catch (err) {
          console.error('Failed to fetch user:', err);
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
          toast.error("Session expired. Please sign in again.");
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  // Save token, fetch user, set state
  const login = async (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    try {
      const res = await axiosInstance.get('/auth/me', {
        headers: { Authorization: `Bearer ${newToken}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error('Failed to fetch user after login:', err);
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    toast.success("Signed out successfully");
    // Wait slightly to let toast render if desired, but window.location.href reloads immediately
    setTimeout(() => {
      window.location.href = '/login';
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
