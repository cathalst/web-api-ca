import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";


const SiteHeader = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="left-section">
        <Link to="/" className="home-link">MyMovies</Link>
        <nav className="nav-links">
          {context && context.user ? (
            <>
              <Link to="/favorites">Favorites</Link>
              <Link to="/my-reviews">My Reviews</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
      <div>
        {context.user ? (
          <>
            <span>Welcome, {context.user.username}!</span>{" "}
            <button onClick={context.logout}>Sign out</button>
          </>
        ) : (
          <>
            <span>You are not logged in</span>{" "}
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
