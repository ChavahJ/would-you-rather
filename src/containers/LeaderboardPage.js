// The Leaderboard is available at/leaderboard.
// Each entry on the leaderboard contains the following:
// the user’s name;
// the user’s avatar;
// the number of questions the user asked; and
// the number of questions the user answered.
// Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const LeaderBoardPage = (props) => {
  return (
    <Container className="leaderboard">
      <Row>
        <Col>
          <h1 className="mt-3">Leaderboard</h1>
          <Table className="my-4" striped bordered hover>
            <thead>
              <tr>
                <th>Users</th>
                <th>Answered</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(props.users).map(([key, value]) => (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{Object.keys(value.answers).length}</td>
                  <td>{value.questions.length}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
function mapStateToProps({ users }) {
  Object.values(users).forEach(function (user) {
    user.rank = user.questions.length + Object.keys(user.answers).length;
  });

  const usersDesc = Object.values(users).sort((a, b) => b.rank - a.rank);

  return {
    users: usersDesc,
  };
}
export default connect(mapStateToProps)(LeaderBoardPage);
