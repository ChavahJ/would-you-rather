// The answered and unanswered polls are both available at the root
// The user can alternate between viewing answered and unanswered polls.
// The unanswered questions are shown by default.

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <h1>Would You Rather?</h1>
        <h2>New Questions</h2>
        <ol>
          <li>Most recent question</li>
          <li>Oldest question</li>
        </ol>
      </div>
      <div className="container">
        <h2>Answered Questions</h2>
        <ol>
          <li>Most recent question</li>
          <li>Oldest question</li>
        </ol>
      </div>
    </section>
  );
};

export default Dashboard;
