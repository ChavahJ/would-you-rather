import { combineReducers } from "redux";
import setAuthedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  setAuthedUser,
  users,
  questions,
});
