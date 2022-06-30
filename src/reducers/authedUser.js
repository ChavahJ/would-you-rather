import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "../actions/authedUser";

export function authedUser(state = null, action) {
  switch (action.type) {
    // case GET_AUTHED_USER:
    //   return {
    //     ...action.authedUser,
    //   };
    case SET_AUTHED_USER:
      return action.id;
    case REMOVE_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
