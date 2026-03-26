import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { ProductPage } from "./Product";

describe("ProductPage", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders product page header", () => {
    render(<ProductPage />);
    const heading = screen.getAllByRole("heading", { level: 1 })[0];
    expect(heading).toBeDefined();
  });

  test("renders features heading", () => {
    render(<ProductPage />);
    const features = screen.getAllByText(/Características Principales/)[0];
    expect(features).toBeDefined();
  });

  test("renders pricing section", () => {
    render(<ProductPage />);
    const pricing = screen.getAllByText(/Planes y Precios/)[0];
    expect(pricing).toBeDefined();
  });

  test("renders pricing cards", () => {
    render(<ProductPage />);
    const professional = screen.getAllByText("Profesional")[0];
    expect(professional).toBeDefined();
  });
});
