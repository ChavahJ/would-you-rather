// The details of the poll are available at questions/:question_id, for Logged In User only
// Unanswered polls: avatar of author and two options shown
// Answered polls: text of chosen option, number of votes, percentage of votes
// The option selected by the logged in user should be clearly marked
// The application asks the user to sign in before being able to access the poll
// The application asks the user to sign in and shows a 404 page if that poll does not exist.

// Upon voting in a poll, all of the information of the answered poll is displayed.
// The user’s response is recorded and is clearly visible on the poll details page.
// When the user comes back to the home page, the polling question appears in the “Answered” column.
// The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

const PollPage = () => {
  return (
    <section>
      <h1>Would You Rather?</h1>
      <h2>Option One</h2>
      <h2>Option Two</h2>
    </section>
  );
};

export default PollPage;
