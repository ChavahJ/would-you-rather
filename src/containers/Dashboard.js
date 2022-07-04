// The user can alternate between viewing answered and unanswered polls.
import { connect } from "react-redux";
import { useState } from "react";
import QuestionList from "../components/QuestionList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Dashboard = (props) => {
  return (
    <Container className="dashboard">
      <Row>
        <Col>
          <h1>Would You Rather?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="m-3" value="unanswered">
            Show Unanswered Questions Only
          </Button>
          <Button className="m-3" value="answered">
            Show Answered Questions Only
          </Button>
          <Button className="m-3" value="all">
            Show All Questions
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h2>New Questions</h2>
        </Col>

        <QuestionList
          key={"unanswered"}
          id="unanswered"
          questions={props.unansweredQuestions}
        />
      </Row>

      <Row>
        <Col>
          <h2>Answered Questions</h2>
        </Col>

        <QuestionList
          key={"answered"}
          id="answered"
          questions={props.answeredQuestions}
        />
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const currentUser = users[authedUser];
  const unansweredQuestions = Object.values(questions).filter(
    (question) => !Object.keys(currentUser.answers).includes(question.id)
  );
  const answeredQuestions = Object.values(questions).filter((question) =>
    Object.keys(currentUser.answers).includes(question.id)
  );

  return {
    currentUser,
    unansweredQuestions,
    answeredQuestions,
  };
};

export default connect(mapStateToProps)(Dashboard);
