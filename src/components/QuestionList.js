// The user can alternate between viewing answered and unanswered polls.
// Each polling question resides in the correct category
// arranged from the most recently created (top) to the least recently created (bottom)
import QuestionCard from "./QuestionCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const QuestionList = (props) => {
  return (
    <Row>
      {Object.values(props.questions)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((question) => {
          return (
            <Col xs={1} md={6}>
              <QuestionCard key={question.id} id={question.id} />
            </Col>
          );
        })}
    </Row>
  );
};

export default QuestionList;
