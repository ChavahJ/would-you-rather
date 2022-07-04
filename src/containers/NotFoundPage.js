import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../utils/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFoundPage = (props) => {
  const urlParams = props.router.params;
  const urlValue = Object.values(urlParams).slice(0, 1);
  const id = urlValue[0].substring(urlValue[0].indexOf("/") + 1);
  const existingPages = Object.keys(props.questions);
  const doesPageExist = existingPages.includes(id);

  return (
    <Container className="my-5">
      <Row>
        {!doesPageExist && (
          <Col>
            <h1>404 Error</h1>
            <p>Oops! We can't find that page.</p>
          </Col>
        )}
        {doesPageExist && (
          <Col>
            <h1>Oops! You're logged out.</h1>
            <p>Please log in to see this poll.</p>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <Link to="/login">Log In</Link>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = ({ authedUser, questions }, props) => ({
  props,
  authedUser,
  questions,
});
export default withRouter(connect(mapStateToProps)(NotFoundPage));
