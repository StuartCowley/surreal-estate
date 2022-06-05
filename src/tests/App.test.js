import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders surreal estate logo with correct alt text", () => {
  render(<App />);
  const logoAltText = screen.getByAltText(/Site logo/);

  expect(logoAltText).toBeInTheDocument();
});
