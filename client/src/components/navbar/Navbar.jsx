import './style.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <Link to={"/"}>
            <h1>Agami Technologies</h1>
          </Link>
          <ul className="nav-list">
            <Link to="./addStudent">
              <li>Add User</li>
            </Link>
            <Link to="allStudent">
              <li>All User</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;