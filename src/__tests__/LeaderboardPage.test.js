import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import LeaderboardPage from "../containers/LeaderboardPage";

it("renders correctly", () => {
  const component = renderWithProviders(
    <MemoryRouter>
      <LeaderboardPage />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
