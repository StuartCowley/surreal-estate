import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders surreal estate title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Surreal Estate/);
  expect(titleElement).toBeInTheDocument();
});
