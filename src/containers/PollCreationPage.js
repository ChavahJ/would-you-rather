// The form is available at/add.
// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
import { useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { addUserQuestion } from "../actions/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PollCreationPage = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChangeOne = (event) => {
    const textOne = event.target.value;
    setOptionOne(textOne);
  };

  const handleChangeTwo = (event) => {
    const textTwo = event.target.value;
    setOptionTwo(textTwo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let successCallback = (result) => {
      console.log(result);
      props.dispatch(addUserQuestion(result.author, result.id));
    };
    let failureCallback = () => {
      console.log("something went wrong");
    };
    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: props.authedUser,
    };

    props
      .dispatch(handleSaveQuestion(question))
      .then((result) => successCallback(result))
      .catch(failureCallback);
  };

  return (
    <Container className="create-poll">
      <Row>
        <Col>
          <h1>Would You Rather</h1>
          <h2>Create Your Own Poll?</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Option One</Form.Label>
              <Form.Control
                type="text"
                value={optionOne}
                onChange={handleChangeOne}></Form.Control>
              <Form.Text className="text-muted">
                Enter your first option here.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Option Two</Form.Label>
              <Form.Control
                type="text"
                value={optionTwo}
                onChange={handleChangeTwo}></Form.Control>
              <Form.Text className="text-muted">
                Enter your second option here.
              </Form.Text>
            </Form.Group>
            <Button
              className="mt-4"
              type="submit"
              disabled={optionOne === "" || optionTwo === ""}>
              Create My Poll
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(PollCreationPage);
