import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Hats App</div>
      </Link>
    </nav>
  );
}

export default Header;