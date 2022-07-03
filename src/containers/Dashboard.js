// The answered and unanswered polls are both available at the root
// The user can alternate between viewing answered and unanswered polls.
// The unanswered questions are shown by default.
import { connect } from "react-redux";
import QuestionList from "../components/QuestionList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <h2>New Questions</h2>
        </Col>
      </Row>
      <QuestionList
        key="unanswered"
        id="unanswered"
        questions={props.unansweredQuestions}
      />
      <Row>
        <Col>
          <h2>Answered Questions</h2>
        </Col>
      </Row>
      <QuestionList
        key="answered"
        id="answered"
        questions={props.answeredQuestions}
      />
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
