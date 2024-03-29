import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  const token = useSelector(selectToken);

  return (
    <>
      <h1>Main Landing Page</h1>
      {token ? (
        <Link to={`/pickquiz/${id}`}>
          <button>Play Game!</button>
        </Link>
      ) : (
        <Link to={"/auth"}>
          <button>Play Game!</button>
        </Link>
      )}
    </>
  );
}
