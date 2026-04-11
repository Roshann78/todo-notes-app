import { BrowserRouter as Router, Routes, Route, useSearchParams, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotesPage from './pages/NotesPage';
import TasksPage from './pages/TasksPage';
import LoginPage from './pages/LoginPage';
import './App.css';

// Handles the OAuth redirect: backend sends user to /?token=XXX
// This component redirects to /login?token=XXX so LoginPage can process it
const TokenHandler = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (token) {
    return <Navigate to={`/login?token=${token}`} replace />;
  }

  return <NotesPage />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TokenHandler />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

