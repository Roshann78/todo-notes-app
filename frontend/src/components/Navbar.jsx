import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Notes</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
};

export default Navbar;
