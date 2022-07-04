// The details of the poll are available at questions/:question_id, for Logged In User only
// Unanswered polls: avatar of author and two options shown
// Answered polls: text of chosen option, number of votes, percentage of votes
// The option selected by the logged in user should be clearly marked
// The application asks the user to sign in before being able to access the poll
// The application asks the user to sign in and shows a 404 page if that poll does not exist.

// Upon voting in a poll, all of the information of the answered poll is displayed.
// The user’s response is recorded and is clearly visible on the poll details page.
// When the user comes back to the home page, the polling question appears in the “Answered” column.
// The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { saveUserAnswer } from "../actions/users";
import { withRouter } from "../utils/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PollPage = (props) => {
  const id = props.router.params.question_id;
  const question = props.questions[id];
  const avatar = props.users[question.author].avatarURL;
  const authedUser = props.authedUser;
  const isAnswered = props.userAnswers.includes(id);
  let whichOption = "";

  if (isAnswered) {
    whichOption = question.optionOne.votes.includes(authedUser)
      ? "optionOne"
      : "optionTwo";
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    const answer = event.target.value;
    props.dispatch(handleSaveQuestionAnswer(authedUser, id, answer));
    props.dispatch(saveUserAnswer(authedUser, id, answer));
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

const mapStateToProps = ({ questions, authedUser, users }, props) => {
  const userAnswers = Object.keys(users[authedUser].answers);

  return {
    props,
    authedUser,
    questions,
    users,
    userAnswers,
  };
};
export default withRouter(connect(mapStateToProps)(PollPage));
