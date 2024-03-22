import { NavLink } from "react-router-dom"

export default function Home() {

    return (
    <>
        <h1>Home</h1>
        <NavLink to="/game">Play Now</NavLink>
        <NavLink to="/dashboard/pick">Pick Random Quiz</NavLink>
    </>
  )
}
