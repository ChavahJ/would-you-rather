// The application works correctly regardless of which user is selected
// Once the user logs in, the home page is shown
// Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown

import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import LoginPage from "./LoginPage";
import Navbar from "../containers/Navbar";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import PollCreationPage from "./PollCreationPage";
import LeaderboardPage from "./LeaderboardPage";
import NotFoundPage from "./NotFoundPage";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
      <main className="main-container">
        {props.authedUser && (
          <header>
            <Navbar />
          </header>
        )}
        {props.loading === true ? null : (
          <Routes>
            {!props.authedUser && (
              <Route path="/login" element={<LoginPage />} />
            )}
            {props.authedUser && (
              <Route path="/" exact element={<Dashboard />} />
            )}
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
        )}
      </main>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  loading: questions === null,
});

export default connect(mapStateToProps)(App);
