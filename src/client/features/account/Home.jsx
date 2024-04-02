import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./account.css";

export default function Home() {
  const { id } = useParams();
  const token = useSelector(selectToken);

  return (
    <>
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
        {token ? (
          <Link to={`/pickquiz/${id}`}>
            <button id="buttonHome">Play Game!</button>
          </Link>
        ) : (
          <Link to={"/auth"}>
            <button id="buttonHome">Play Game!</button>
          </Link>
        )}
      </article>
    </>
  );
}
