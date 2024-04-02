import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./navbar.css";

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
      <div>
        {/*<NavLink className="navLink" to="/">
          Home
  </NavLink>*/}
        <NavLink className="navLink" to="/account">
          Account
        </NavLink>
        <NavLink className="navLink" to="/auth">
          Login/Logout
        </NavLink>
      </div>
    </nav>
  );
}
