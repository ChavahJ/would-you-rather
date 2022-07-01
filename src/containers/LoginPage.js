import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import employeeImg from "../images/login.png";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(
    props.authedUser ? props.authedUser : ""
  );

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(setAuthedUser(userId));
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row>
        <Col className="text-center">
          <h1>Employee Polls</h1>
          <Image
            className="py-4"
            fluid
            src={employeeImg}
            alt="happy smiling people"
          />
          <h2>Login Here</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUserSelect">
              <Form.Select value={userId} onChange={handleChange}>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(LoginPage);
