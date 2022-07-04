// The user can alternate between viewing answered and unanswered polls.
import QuestionCard from "./QuestionCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const QuestionList = (props) => {
  return (
    <Row>
      {Object.values(props.questions)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((question) => {
          let id = question.id;
          return (
            <Col xs={1} md={6}>
              <QuestionCard key={id} id={id} />
            </Col>
          );
        })}
    </Row>
  );
};

export default QuestionList;
