import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const HeaderNav = () => {
  return (
    <Nav className="me-auto">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/leaderboard">
          Leaderboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/add">
          New Poll
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default HeaderNav;
