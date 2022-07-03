import { RECEIVE_USERS } from "../actions/users";
import { SAVE_USER_ANSWER } from "../actions/users";

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
          ["answers"]: {
            ...state[user].answers,
            ...newAnswer,
          },
        },
      };
    default:
      return state;
  }
}
