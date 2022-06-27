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
import ProtectedRoute from "../components/Protected";
import NotFoundPage from "./NotFoundPage";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <main className="main-container">
        <Nav />
        <UserIndicator />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route
            path="/questions/:question_id"
            element={
              <ProtectedRoute>
                <PollPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <LeaderboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <PollCreationPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default connect()(App);
