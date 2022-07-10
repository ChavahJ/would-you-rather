import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import { showModal } from "../actions/modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

const UserIndicator = (props) => {
  const handleLogOut = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(removeAuthedUser(""));
    dispatch(showModal());
  };

  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text data-testid="navText">
        Signed in as: {props.authedUser}
      </Navbar.Text>
      <Button className="ms-4" onClick={handleLogOut} data-testid={"logOut"}>
        Log Out
      </Button>
    </Navbar.Collapse>
  );
};
const mapStateToProps = ({ authedUser, users, modalStore }) => ({
  authedUser,
  users,
  modalStore,
});
export default connect(mapStateToProps)(UserIndicator);
