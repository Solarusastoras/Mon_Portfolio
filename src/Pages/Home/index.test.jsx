import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import Home from "./index";

// Test d'intégration
describe("When a page is created", () => {
  // Test pour vérifier que le portfolio est affiché
  it("a Portfolio is displayed", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const portfolio = await screen.findByRole("main");
    expect(portfolio).toBeInTheDocument();
  });

  // Test pour vérifier que le formulaire de contact est affiché
  it("a Form is displayed", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const form = await screen.findByRole("form");
    expect(form).toBeInTheDocument();
  });
});
