import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import NotesPage from './pages/NotesPage';
import TasksPage from './pages/TasksPage';
import LoginPage from './pages/LoginPage';
import useAuth from './hooks/useAuth';
import './App.css';

// Redirect logged-in users away from /login
const LoginRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to="/" replace />;

  return <LoginPage />;
};

function App() {
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

