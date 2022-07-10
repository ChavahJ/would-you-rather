import { connect } from "react-redux";
import { useState } from "react";
import QuestionList from "../components/QuestionList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Dashboard = (props) => {
  const { questions, users, authedUser } = props;
  const currentUser = users[authedUser];
  const [dashboardView, setDashboardView] = useState("all");
  const unansweredQuestions = Object.values(questions).filter(
    (question) => !Object.keys(currentUser.answers).includes(question.id)
  );
  const answeredQuestions = Object.values(questions).filter((question) =>
    Object.keys(currentUser.answers).includes(question.id)
  );

  const showUnanswered =
    dashboardView === "all" || dashboardView === "unanswered";
  const showAnswered = dashboardView === "all" || dashboardView === "answered";

  const handleClick = (event) => {
    event.preventDefault();
    setDashboardView(event.target.value);
  };

  return (
    <Container className="dashboard">
      <Row>
        <Col>
          <h1>Would You Rather?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="m-3" value="unanswered" onClick={handleClick}>
            Show Unanswered Questions Only
          </Button>
          <Button className="m-3" value="answered" onClick={handleClick}>
            Show Answered Questions Only
          </Button>
          <Button className="m-3" value="all" onClick={handleClick}>
            Show All Questions
          </Button>
        </Col>
      </Row>
      {showUnanswered && (
        <Row>
          <Col xs={12}>
            <h2>New Questions</h2>
          </Col>

          <QuestionList id="unanswered" questions={unansweredQuestions} />
        </Row>
      )}
      {showAnswered && (
        <Row>
          <Col xs={12}>
            <h2>Answered Questions</h2>
          </Col>

          <QuestionList id="answered" questions={answeredQuestions} />
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questions,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
