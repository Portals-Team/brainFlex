import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "../index.css";

/**
 * A simple navigation bar that displays "Log In" if the user is not logged in,
 * and "Log Out" if the user is logged in.
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
        <p id="navbarEmoji">🧠</p>
      </div>
      <div>
        <p id="gameTitle">brainFLEX</p>
        <div>
          <NavLink id="navLink" to="/">
            Home
          </NavLink>
          <NavLink id="navLink" to="/account">
            Account
          </NavLink>
          <NavLink id="navLink" to="/auth">
            Login/Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
