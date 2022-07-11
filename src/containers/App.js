import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoginModal from "../components/LoginModal";
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
  const { modalStore } = props;
  return (
    <Fragment>
      {modalStore === true && <LoginModal show={true} />}
      {modalStore === false && <LoginModal show={false} /> && (
        <main className="main-container" data-testid={"mainContainer"}>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/questions/:question_id" element={<PollPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/add" element={<PollCreationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, modalStore }) => ({
  authedUser,
  modalStore,
});

export default connect(mapStateToProps)(App);
