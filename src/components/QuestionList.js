// The user can alternate between viewing answered and unanswered polls.
// Each polling question resides in the correct category
// arranged from the most recently created (top) to the least recently created (bottom)

const QuestionList = () => {
  return (
    <div className="question-container">
      <div className="question-card">Question One</div>
      <div className="question-card">Question Two</div>
      <div className="question-card">Question Three</div>
    </div>
  );
};

export default QuestionList;
