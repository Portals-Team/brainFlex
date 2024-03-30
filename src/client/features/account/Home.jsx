import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  const token = useSelector(selectToken);

  return (
    <>
      <section id="homePageContainer">
        <p id="homePageTitle">brainFLEX</p>
        <div id="imageContainerHomePage">
          <img
            id="homeImage"
            src="https://res-console.cloudinary.com/dzpne110u/thumbnails/v1/image/upload/v1711830071/QjA3QUIyM0YtMjcyRC00RjgzLUE4MEItMUUyODc3N0ZFMEI5X3ZrcmFhdg==/grid_landscape"
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
      </section>
    </>
  );
}
