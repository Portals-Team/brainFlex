import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./layout.css";

/**
 *
 * @component Navbar universal component via Root.jsx can be viewed on every page of the application with links to home, account and indicates if a user is logged in or logged out.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">
          <p id="navbarEmoji">🧠 </p>
        </NavLink>
      </div>
      <div id="navBarSectionRight">
        {token && (

          <li className="login">
          <NavLink className="navLink" to="/account">
            Account
          </NavLink>
        </li>
        )}
        {token ? (
          <li className="login">
            <a className="navLink" onClick={handleLogout}>
              Log Out
            </a>
          </li>
        ) : (
          <li className="login">
            <NavLink className="navLink" to="/auth">
              Log In
            </NavLink>
          </li>
        )}
      </div>
    </nav>
  );
}
