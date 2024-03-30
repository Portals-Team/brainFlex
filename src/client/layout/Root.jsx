import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "../index.css";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
