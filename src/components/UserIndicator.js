// The application allows the user to log out and log back in
// The name of the logged in user is visible on the page

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";
import Button from "react-bootstrap/Button";

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
    <div className="user-indicator">
      <div>{props.authedUser}</div>
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
};
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});
export default connect(mapStateToProps)(UserIndicator);
