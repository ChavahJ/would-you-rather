import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OptionAnswered = (props) => {
  const { option, title, question, whichOption } = props;

  let optionOneVotes = question.optionOne.votes.length;
  let optionTwoVotes = question.optionOne.votes.length;
  let totalVotes = optionOneVotes + optionTwoVotes;
  let currentOptionVotes =
    whichOption === "optionOne" ? optionOneVotes : optionTwoVotes;
  return (
    <Row className="my-3">
      <Col>
        <h2>{title}:</h2>
        <p
          className={
            whichOption === option ? "lead bg-warning d-inline-block" : ""
          }>
          {whichOption === option && <span>You picked: </span>}
          {whichOption !== option && <span>You didn't pick: </span>}
          {question[option].text}
        </p>
        <div>
          <p>Number of votes for this option:&nbsp;{currentOptionVotes}</p>
          <p>
            Percentage of all votes:&nbsp;
            {Math.round((currentOptionVotes / totalVotes) * 100)}%
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default OptionAnswered;
