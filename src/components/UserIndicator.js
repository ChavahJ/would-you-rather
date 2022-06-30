import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

const UserIndicator = (props) => {
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(removeAuthedUser(""));
    localStorage.removeItem("authedUser");
    navigate("/login");
  };

  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>Signed in as: {props.authedUser}</Navbar.Text>
      <Button className="ms-4" onClick={handleLogOut}>
        Log Out
      </Button>
    </Navbar.Collapse>
  );
};
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});
export default connect(mapStateToProps)(UserIndicator);
