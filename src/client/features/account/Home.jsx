import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetMeQuery } from "./accountSlice";

import "./account.css";

/**
 *
 * @component Home returns the landing page for the application this view is shown whether a user is logged in or not.
 */
export default function Home() {
  
  const {data: me} = useGetMeQuery();
  const id = me?.id;
  const token = useSelector(selectToken);

  return (
      <article id="homePageContainer">
        <header id="homePageTitle">brainFLEX</header>
        <div id="imageContainerHomePage">
          <img
            id="homeImage"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1711830071/B07AB23F-272D-4F83-A80B-1E28777FE0B9_vkraav.jpg"
            alt="illustration of a brain lifting weights"
          />
        </div>
        <p id="homePageTitleTag">your daily quiz workout</p>
        <section id="buttonSectionHome">
          {token ? (
            <Link to={`/pickquiz/`}>
              <button className="buttonHome">Play Game!</button>
            </Link>
          ) : (
            <Link to={"/auth"}>
              <button className="buttonHome">Play Game!</button>
            </Link>
          )}
          <Link to="/howtoplay/1">
            <button className="buttonHome">How To Play</button>
          </Link>
        </section>
      </article>
  );
}
