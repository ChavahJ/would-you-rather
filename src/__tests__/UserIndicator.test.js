import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import { setupStore } from "../store";
import UserIndicator from "../components/UserIndicator";
import { setAuthedUser } from "../actions/authedUser";

describe("UserIndicator", () => {
  it("will show the currently logged in user", () => {
    const store = setupStore();
    store.dispatch(setAuthedUser("mtsamis"));

    renderWithProviders(
      <MemoryRouter>
        <UserIndicator />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByTestId("navText")).toHaveTextContent("mtsamis");
  });
  it("will invoke removeAuthedUser and navigate to login page", async () => {
    const store = setupStore();
    store.dispatch(setAuthedUser("mtsamis"));

    const component = renderWithProviders(
      <MemoryRouter>
        <UserIndicator />
      </MemoryRouter>,
      { store }
    );
    const logOutButton = component.getByRole("button");
    await fireEvent.click(logOutButton);
    expect(screen.getByTestId("navText")).not.toBeInTheDocument;
  });
});
