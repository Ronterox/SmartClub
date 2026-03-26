import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { HomePage } from "./Home";

describe("HomePage", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders hero section with main heading", () => {
    render(<HomePage />);
    const heading = screen.getAllByRole("heading", { level: 1 })[0];
    expect(heading).toBeDefined();
    expect(heading.textContent).toContain("Gestión");
  });

  test("renders features section", () => {
    render(<HomePage />);
    const featuresText = screen.getAllByText(/Por qué elegir/)[0];
    expect(featuresText).toBeDefined();
  });

  test("renders statistics section", () => {
    render(<HomePage />);
    const stats = screen.getAllByText("500+")[0];
    expect(stats).toBeDefined();
  });

  test("renders CTA section", () => {
    render(<HomePage />);
    const cta = screen.getAllByText(/Listo para transformar/)[0];
    expect(cta).toBeDefined();
  });

  test("renders buttons", () => {
    render(<HomePage />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
