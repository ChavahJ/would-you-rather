import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFoundPage = (props) => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="error-404">
          <h1>404 Error</h1>
          <p>Oops! We can't find that page.</p>
          {props.authedUser && <Link to="/">Take Me Home</Link>}
          {!props.authedUser && <Link to="/login">Please Log In</Link>}
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});
export default connect(mapStateToProps)(NotFoundPage);
