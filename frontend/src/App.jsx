import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import NotesPage from './pages/NotesPage';
import TasksPage from './pages/TasksPage';
import LoginPage from './pages/LoginPage';
import useAuth from './hooks/useAuth';
import axiosInstance from './utils/axiosInstance';
import { requestNotificationPermission, checkTasksDue } from './utils/notifications';
import { useEffect } from 'react';
import './App.css';

// Redirect logged-in users away from /login
const LoginRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to="/" replace />;

  return <LoginPage />;
};

function App() {
  useEffect(() => {
    requestNotificationPermission();

    const fetchAndCheckTasks = async () => {
      try {
        // We fetch directly from the backend so the background check is never stale!
        const response = await axiosInstance.get('/api/tasks');
        checkTasksDue(response.data);
      } catch (error) {
        // Ignore errors if user is just not logged in yet
      }
    };

    // Check immediately, then run the background check every 60 seconds
    fetchAndCheckTasks();
    const intervalId = setInterval(fetchAndCheckTasks, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Protected routes — require login */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<NotesPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>

        {/* Public route — redirects to / if already logged in */}
        <Route path="/login" element={<LoginRoute />} />
      </Routes>
    </Router>
  );
}

export default App;

