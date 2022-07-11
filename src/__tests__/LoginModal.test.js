import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import LoginModal from "../components/LoginModal";

describe("LoginModal", () => {
  it("will have a form, select, and submit button", () => {
    const component = renderWithProviders(
      <MemoryRouter>
        <LoginModal />
      </MemoryRouter>
    );

    const form = component.getByTestId("login-form");

    expect(form).toBeInTheDocument();

    const select = component.getByTestId("login-select");
    expect(select).toBeInTheDocument();

    const submitButton = component.getByTestId("login-button");
    expect(submitButton).toBeInTheDocument();
  });

  it("will change input value", async () => {
    renderWithProviders(
      <MemoryRouter>
        <LoginModal />
      </MemoryRouter>
    );
    const select = screen.getByTestId("login-select");
    const optionMike = screen.getByRole("option", { value: "mtsamis" });

    await fireEvent.change(select, { target: { value: "mtsamis" } });
    expect(optionMike.selected).toBe(true);
  });

  it("when submit button is click user navigates away from the page", async () => {
    const component = renderWithProviders(
      <MemoryRouter>
        <LoginModal />
      </MemoryRouter>
    );
    const submitButton = component.getByTestId("login-button");
    await fireEvent.click(submitButton);
    expect(screen.getByTestId("login-form")).not.toBeInTheDocument;
  });
});
