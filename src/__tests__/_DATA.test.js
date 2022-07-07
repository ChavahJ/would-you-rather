import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("saveQuestion", () => {
  it("will save a new question", async () => {
    const author = "mtsamis";
    const optionOneText = "hire more frontend developers";
    const optionTwoText = "hire more backend developers";

    const questionObject = {
      author,
      optionOneText,
      optionTwoText,
    };
    const response = await _saveQuestion(questionObject);

    const expectedResponse = {
      author: author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      },
    };

    expect(response).toMatchObject(expectedResponse);
  });

  it("will fail and reject to value", async () => {
    const value = "Please provide optionOneText, optionTwoText, and author";
    await expect(_saveQuestion({})).rejects.toMatch(value);
  });
});

describe("saveQuestionAnswer", () => {
  it("will save a new answer to an existing question", async () => {
    const authedUser = "zoshikanlu";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";

    const response = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(response).resolves.toBeTruthy;
  });

  it("will fail and reject to value", async () => {
    const authedUser = "";
    const qid = "";
    const answer = "";
    const value = "Please provide authedUser, qid, and answer";
    await expect(_saveQuestionAnswer(authedUser, qid, answer)).rejects.toMatch(
      value
    );
  });
});
