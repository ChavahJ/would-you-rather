import {
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  ADD_USER_QUESTION,
} from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_ANSWER:
      const { user, answer } = action;
      let newAnswer = { [action.qid]: answer };

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: { ...state[user].answers, ...newAnswer },
        },
      };
    case ADD_USER_QUESTION:
      const { qid, uid } = action;
      return {
        ...state,
        [uid]: {
          ...state[uid],
          questions: state[uid].questions.concat(qid),
        },
      };
    default:
      return state;
  }
}
