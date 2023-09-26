import { useContext } from "react"; //useContext hook returns the context value of the provider
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext"; 

const Nav = () => {
  const {user} = useContext(UserContext) //we specify UserContext as what we want to subscribe to

  return (
    <nav>
      {
        user ? (
          <>
            <Link to="/settings">Settings</Link>
            <Link to="/signout">Sign Out</Link>
          </>
        ) : (
          <Link className="signin" to="/signin">Sign In</Link>
        )
      }
    </nav>
  );
}

export default Nav;