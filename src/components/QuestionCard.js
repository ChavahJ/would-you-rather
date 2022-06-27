// A polling question links to details of that poll.

import { useNavigate, Link } from "react-router-dom";

const QuestionCard = () => {
  return (
    <div className="question-card">
      <p>Name of Author</p>
      <p>
        <span>Time</span> | <span>Date</span>
      </p>
      <Link to="/">Show</Link>
    </div>
  );
};

export default QuestionCard;
