import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFoundPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>404 Error</h1>
          <p>Oops! That page doesn't exist.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
