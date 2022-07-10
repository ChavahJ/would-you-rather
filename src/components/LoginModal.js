import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { hideModal } from "../actions/modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import employeeImg from "../images/login.png";

const LoginModal = (props) => {
  const [userId, setUserId] = useState("");

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(setAuthedUser(userId));
    dispatch(hideModal());
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.modalStore}>
      <Modal.Header>
        <Modal.Title id="loginModal">
          <h1>Employee Polls</h1>
          <Image
            className="py-4"
            fluid
            src={employeeImg}
            alt="happy smiling people"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Login Here</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formUserSelect"
            data-testid="login-form">
            <Form.Select
              value={userId}
              onChange={handleChange}
              data-testid="login-select">
              <option key="null" value={-1}>
                Select a User
              </option>
              {Object.entries(props.users).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            data-testid="login-button"
            disabled={!userId}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

function mapStateToProps({ authedUser, users, modalStore }) {
  return {
    authedUser,
    users,
    modalStore,
  };
}

export default connect(mapStateToProps)(LoginModal);
