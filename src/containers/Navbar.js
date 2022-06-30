import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import HeaderNav from "../components/HeaderNav";
import UserIndicator from "../components/UserIndicator";

const myNavBar = () => {
  return (
    <Navbar>
      <Container>
        <HeaderNav />
        <UserIndicator />
      </Container>
    </Navbar>
  );
};

export default myNavBar;
