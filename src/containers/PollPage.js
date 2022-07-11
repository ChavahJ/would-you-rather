// The application asks the user to sign in and shows a 404 page if that poll does not exist.
import { connect } from "react-redux";
import { addQuestionAnswer } from "../actions/questions";
import { saveUserAnswer } from "../actions/users";
import AuthorInfo from "../components/AuthorInfo";
import OptionUnanswered from "../components/OptionUnanswered";
import OptionAnswered from "../components/OptionAnswered";
import NotFoundPage from "./NotFoundPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  const { questions, users, authedUser, params } = props;

  const qid = params.question_id;

  const questionExists = qid in questions;

  if (!questionExists) {
    return <NotFoundPage />;
  }
  let question = questions[qid];

  const options = [
    { option: "optionOne", title: "Option One" },
    { option: "optionTwo", title: "Option Two" },
  ];

  const userAnswers = Object.keys(users[authedUser].answers);
  const isAnswered = userAnswers.includes(qid);
  let whichOption = "";
  if (isAnswered) {
    whichOption = question.optionOne.votes.includes(authedUser)
      ? "optionOne"
      : "optionTwo";
  }

  const handleOnClick = (answer) => {
    props.dispatch(addQuestionAnswer(authedUser, qid, answer));
    props.dispatch(saveUserAnswer(authedUser, qid, answer));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Would You Rather?</h1>
        </Col>
      </Row>
      {questionExists && <AuthorInfo question={question} />}
      {questionExists &&
        !isAnswered &&
        options.map((option) => {
          return (
            <OptionUnanswered
              key={option.option}
              option={option.option}
              title={option.title}
              question={question}
              handleOnClick={handleOnClick}
            />
          );
        })}
      {questionExists &&
        isAnswered &&
        options.map((option) => {
          return (
            <OptionAnswered
              key={option.option}
              option={option.option}
              title={option.title}
              question={question}
              whichOption={whichOption}
            />
          );
        })}
    </Container>
  );
};

const mapStateToProps = ({ questions, authedUser, users }, props) => {
  const { router } = props;
  return {
    authedUser,
    questions,
    users,
    params: router.params,
  };
};
export default withRouter(connect(mapStateToProps)(PollPage));
