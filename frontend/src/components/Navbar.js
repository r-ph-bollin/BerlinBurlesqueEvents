import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../index.css";

import { Button } from "semantic-ui-react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Berlin Niche Events</h3>
        </Link>
        <div>
          <span>
            <Link to="/">
              <Button className="datefilterbutton">
                <p>Today</p>
              </Button>
            </Link>
            <Link to="/tomorrow">
              <Button className="datefilterbutton">
                <p>Tomorrow</p>
              </Button>
            </Link>
            <Link to="/dayAfterTomorrow">
              <Button className="datefilterbutton">
                <p>In 2 days</p>
              </Button>
            </Link>
          </span>
        </div>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <Link class="alertbutton" to="/editor">
                Manage events
              </Link>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
