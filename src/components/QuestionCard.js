// A polling question links to details of that poll.
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/api";
import Card from "react-bootstrap/Card";

const QuestionCard = (props) => {
  console.log(props);
  const { author, timestamp, id } = props.question;
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>
          <span>{formatDate(timestamp)}</span>
        </Card.Text>
        <Link to={`/questions/${id}`} className="btn btn-primary" role="button">
          Show Poll
        </Link>
      </Card.Body>
    </Card>
  );
};
const mapStateToProps = ({ questions, authedUser }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question,
    id,
  };
};
export default connect(mapStateToProps)(QuestionCard);
