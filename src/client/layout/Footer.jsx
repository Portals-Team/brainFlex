import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./layout.css";

/**
 *
 * @component Footer universal component via Root.jsx can be viewed on every page of the application with links to home, account, game tutorial and indicates if a user is logged in or logged out.
 */
export default function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <section id="footerSection">
      <div id="footerNavElements">
        <p className="footerNavElement">
          <Link to="/">home</Link>
        </p>
        {token && (<p className="footerNavElement">
          <Link to="/account/">account</Link>
        </p> )
        }
        <p className="footerNavElement">
          {token ? (
            <li className="footerLoginElement">
              <a className="footerLogin" onClick={handleLogout}>
                log out
              </a>
            </li>
          ) : (
            <li className="footerLoginElement">
              <NavLink className="footerLogin" to="/auth">
                log in
              </NavLink>
            </li>
          )}
        </p>
      </div>
      <Link to="howtoplay/1">
        <h3 id="howToPlay">how to play </h3>
      </Link>
      <p className="creators">creators: </p>
      <div id="creatorNames">
        <a
          className="creators"
          target="_blank"
          href="https://www.linkedin.com/in/bravermanian/"
        >
          Ian Braverman
        </a>
        <a
          className="creatorsMiddle"
          target="_blank"
          href="https://www.linkedin.com/in/kyle-cogan-268aa1a9/"
        >
          Kyle Cogan
        </a>
        <a
          className="creators"
          target="_blank"
          href="https://www.linkedin.com/in/richmarafioti/"
        >
          Rich Marafioti
        </a>
      </div>
    </section>
  );
}
