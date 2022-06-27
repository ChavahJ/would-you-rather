// The Leaderboard is available at/leaderboard.
// Each entry on the leaderboard contains the following:
// the user’s name;
// the user’s avatar;
// the number of questions the user asked; and
// the number of questions the user answered.
// Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

const LeaderBoardPage = () => {
  return (
    <section className="leaderboard">
      <table>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
        <tr>
          <td>User Avatar | User Name</td>
          <td>Number of Answered Polls</td>
          <td>Number of Polls Created</td>
        </tr>
        <tr>
          <td>User Avatar | User Name</td>
          <td>Number of Answered Polls</td>
          <td>Number of Polls Created</td>
        </tr>
      </table>
    </section>
  );
};

export default LeaderBoardPage;
