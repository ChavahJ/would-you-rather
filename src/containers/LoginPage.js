// There should be a way for the user to impersonate/ log in as an existing user.
// Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
// Once the user logs in, the home page is shown.

import { connect } from "react-redux";

const LoginPage = (props) => {
  const { users } = props.users;
  return (
    <div>
      <h1>Employee Polls</h1>
      <h2>Login Here</h2>
      <form></form>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: users,
  };
}

export default connect(mapStateToProps)(LoginPage);
