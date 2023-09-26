import { Link } from 'react-router-dom';

import Nav from './Nav';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext';

const Header = () => {
  const {accentColor} = useContext(ThemeContext)
  const {user}= useContext(UserContext)
  return (
    <div className="header" style={{ background: accentColor }}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav user={user} />
      </div>
    </div>
  );
};

export default Header;