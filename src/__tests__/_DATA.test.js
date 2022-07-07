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
      id: response.id,
      timestamp: response.timestamp,
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
