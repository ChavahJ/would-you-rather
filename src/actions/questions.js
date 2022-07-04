import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return async function saveQuestionAnswerThunk(dispatch) {
    const response = await saveQuestionAnswer(authedUser, qid, answer);
    dispatch({ type: SAVE_QUESTION_ANSWER, payload: response });
  };
}

export function handleSaveQuestion(question) {
  return async function saveQuestionThunk(dispatch) {
    const response = await saveQuestion(question);
    dispatch({ type: ADD_QUESTION, payload: response });
    return response;
  };
}
