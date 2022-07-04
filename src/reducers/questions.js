// An async unit test to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
// An async unit test to verify that an error is returned if incorrect data is passed to the function.
// The following two unit tests must be present for _saveQuestionAnswer():
// An async unit test to verify that true is returned when correctly formatted data is passed to the function.
// An async unit test to verify that an error is returned if incorrect data is passed to the function.

import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      };
    case SAVE_QUESTION:
      const { formattedQuestion } = action;
      return {
        ...state,
        formattedQuestion,
      };
    default:
      return state;
  }
}
