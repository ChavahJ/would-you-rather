// The user can navigate to the leaderboard.
// The user can navigate to the form that allows the user to create a new poll.
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New Poll</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
