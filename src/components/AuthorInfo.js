import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AuthorInfo = (props) => {
  const { users, question } = props;

  const questionAuthor = question.author;
  const avatar = users[questionAuthor].avatarURL;
  return (
    <Row>
      <Col>
        <p>Poll From User: {questionAuthor}</p>
        <Image className="img-avatar p-5" fluid src={avatar} />
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ users }, { question }) => {
  return {
    users,
    question,
  };
};
export default connect(mapStateToProps)(AuthorInfo);
