// The form is available at/add.
// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.

const PollCreationPage = () => {
  return (
    <section className="create-poll">
      <h1>Would You Rather</h1>
      <p>Create Your Own Poll</p>
      <form>
        <label>First Option</label>
        <input type="text"></input>
        <label>Second Option</label>
        <input type="text"></input>
        <button type="submit">Create My Poll</button>
      </form>
    </section>
  );
};

export default PollCreationPage;
