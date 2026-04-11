import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // Still checking auth status — show a loading spinner
  if (loading) {
    return (
      <div className="protected-loading">
        <div className="spinner"></div>
        <style>{`
          .protected-loading {
            display: flex; justify-content: center; align-items: center;
            min-height: 60vh;
          }
          .spinner {
            width: 40px; height: 40px;
            border: 4px solid var(--border-color, #333);
            border-top-color: var(--accent-color, #646cff);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  // Not logged in — redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in — render child routes
  return <Outlet />;
};

export default ProtectedRoute;
