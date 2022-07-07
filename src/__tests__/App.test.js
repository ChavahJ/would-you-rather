import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import App from "../containers/App";

it("renders correctly", () => {
  const component = renderWithProviders(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
