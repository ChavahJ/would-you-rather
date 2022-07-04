import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

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
                  <td>
                    <Image className="img-avatar" fluid src={value.avatarURL} />
                    &nbsp;
                    {value.name}
                  </td>
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
