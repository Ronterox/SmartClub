import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { AboutPage } from "./About";

describe("AboutPage", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders about page header", () => {
    render(<AboutPage />);
    const heading = screen.getAllByRole("heading", { level: 1 })[0];
    expect(heading).toBeDefined();
  });

  test("renders history section", () => {
    render(<AboutPage />);
    const history = screen.getAllByText(/Nuestra Historia/)[0];
    expect(history).toBeDefined();
  });

  test("renders team section", () => {
    render(<AboutPage />);
    const team = screen.getAllByText(/Nuestro Equipo/)[0];
    expect(team).toBeDefined();
  });
});
