import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import LoginPage from "../containers/LoginPage";

it("will have a form, select, and submit button", () => {
  const component = renderWithProviders(<LoginPage />);

  const form = component.getByTestId("login-form");

  expect(form).toBeInTheDocument();

  const select = component.getByTestId("login-select");
  expect(select).toBeInTheDocument();

  const submitButton = component.getByTestId("login-button");
  expect(submitButton).toBeInTheDocument();
});

it("will accept a value and fire a click", () => {
  const component = renderWithProviders(<LoginPage />);
  const select = component.getByTestId("login-select");
  fireEvent.change(select, {
    target: { value: "zoshikanlu" },
  });

  const submitButton = component.getByTestId("login-button");
  fireEvent.click(submitButton);
});

// it("will redirect after submit", () => {

// })
