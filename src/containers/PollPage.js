// The application asks the user to sign in and shows a 404 page if that poll does not exist.

import { connect } from "react-redux";
import { addQuestionAnswer } from "../actions/questions";
import { saveUserAnswer } from "../actions/users";
import { withRouter } from "../utils/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PollPage = (props) => {
  const { questions, users, authedUser } = props;
  const qid = props.router.params.question_id;
  const question = questions[qid];
  const questionAuthor = question.author;
  const userAnswers = Object.keys(users[authedUser].answers);

  const isAnswered = userAnswers.includes(qid);

  let whichOption = "";

  if (isAnswered) {
    whichOption = question.optionOne.votes.includes(authedUser)
      ? "optionOne"
      : "optionTwo";
  }

  const avatar = users[questionAuthor].avatarURL;

  const handleOnClick = (event) => {
    event.preventDefault();
    const answer = event.target.value;
    props.dispatch(addQuestionAnswer(authedUser, qid, answer));
    props.dispatch(saveUserAnswer(authedUser, qid, answer));
  };

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return (
    <Container>
      <Row>
        <Col>
          <h1>Would You Rather?</h1>
          <p>Poll From User: {question.author} </p>
          <Image className="img-avatar p-5" fluid src={avatar} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Option One:</h2>
          <p
            className={
              isAnswered && whichOption === "optionOne"
                ? "lead bg-warning d-inline-block"
                : ""
            }>
            {isAnswered && whichOption === "optionOne" && (
              <span>You picked: </span>
            )}
            {isAnswered && whichOption !== "optionOne" && (
              <span>You didn't pick: </span>
            )}
            {question.optionOne.text}
          </p>
          {!isAnswered && (
            <Button onClick={handleOnClick} value="optionOne">
              I Like This Option
            </Button>
          )}
          {isAnswered && (
            <div>
              <p>Number of votes for this option:&nbsp;{optionOneVotes}</p>
              <p>
                Percentage of all votes:&nbsp;
                {Math.round((optionOneVotes / totalVotes) * 100)}%
              </p>
            </div>
          )}
        </Col>
        <Col>
          <h2>Option Two:</h2>
          <p
            className={
              isAnswered && whichOption === "optionTwo"
                ? "lead bg-warning d-inline-block"
                : ""
            }>
            {isAnswered && whichOption === "optionTwo" && (
              <span>You picked: </span>
            )}
            {isAnswered && whichOption !== "optionTwo" && (
              <span>You didn't pick: </span>
            )}
            {question.optionTwo.text}
          </p>
          {!isAnswered && (
            <Button onClick={handleOnClick} value="optionTwo">
              This is better!
            </Button>
          )}
          {isAnswered && (
            <div>
              <p>Number of votes for this option:&nbsp;{optionTwoVotes}</p>
              <p>
                Percentage of all votes:&nbsp;
                {Math.round((optionTwoVotes / totalVotes) * 100)}%
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  return {
    id,
    authedUser,
    questions,
    users,
  };
};
export default withRouter(connect(mapStateToProps)(PollPage));
