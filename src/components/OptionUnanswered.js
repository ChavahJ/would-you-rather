import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const OptionUnanswered = (props) => {
  const { title, option, question, handleOnClick } = props;

  const submitHandleOnClick = (event) => {
    event.preventDefault();
    const answer = event.target.value;
    handleOnClick(answer);
  };
  return (
    <Row className="my-4">
      <Col>
        <h2>{title}:</h2>
        <p>{question[option].text}</p>
        <Button onClick={submitHandleOnClick} value={option}>
          I Prefer {title}
        </Button>
      </Col>
    </Row>
  );
};

export default OptionUnanswered;
