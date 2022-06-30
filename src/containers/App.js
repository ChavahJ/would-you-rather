// The application works correctly regardless of which user is selected
// Once the user logs in, the home page is shown
// Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown

import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoginPage from "./LoginPage";
import Nav from "../components/Nav";
import UserIndicator from "../components/UserIndicator";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import PollCreationPage from "./PollCreationPage";
import LeaderboardPage from "./LeaderboardPage";
import NotFoundPage from "./NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const App = (props) => {
  useEffect(() => {
    console.log(props);
    props.dispatch(handleInitialData());
    const signedIn = localStorage.getItem("authedUser");
    if (signedIn) {
      props.dispatch(setAuthedUser(signedIn));
    }
  }, [props]);

  return (
    <Fragment>
      <main className="main-container">
        {props.authedUser && (
          <header>
            <Nav />
            <UserIndicator />
          </header>
        )}
        <Routes>
          {!props.authedUser && <Route path="/login" element={<LoginPage />} />}
          {props.authedUser && <Route path="/" exact element={<Dashboard />} />}
          {props.authedUser && (
            <Route path="/questions/:question_id" element={<PollPage />} />
          )}
          {props.authedUser && (
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          )}
          {props.authedUser && (
            <Route path="/add" element={<PollCreationPage />} />
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
