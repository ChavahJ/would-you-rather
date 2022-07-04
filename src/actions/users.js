export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveUserAnswer(user, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    user,
    qid,
    answer,
  };
}

export function addUserQuestion(uid, qid) {
  return {
    type: ADD_USER_QUESTION,
    uid,
    qid,
  };
}
