import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
// import { getAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    // dispatch(getAuthedUser());
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}
