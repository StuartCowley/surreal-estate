import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

test("renders all menu options", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const viewPropertiesLink = screen.getByText(/View Properties/);
  const addPropertyLink = screen.getByText(/Add a Property/);

  expect(viewPropertiesLink).toBeInTheDocument();
  expect(addPropertyLink).toBeInTheDocument();
});
