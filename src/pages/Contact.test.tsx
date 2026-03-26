import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { ContactPage } from "./Contact";

describe("ContactPage", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders contact page header", () => {
    render(<ContactPage />);
    const heading = screen.getAllByRole("heading", { level: 1 })[0];
    expect(heading).toBeDefined();
  });

  test("renders form fields", () => {
    render(<ContactPage />);
    const nameInput = screen.getAllByLabelText("Nombre completo")[0];
    const emailInput = screen.getAllByLabelText("Email")[0];
    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
  });

  test("renders submit button", () => {
    render(<ContactPage />);
    const submitButton = screen.getAllByRole("button", { type: "submit" })[0];
    expect(submitButton).toBeDefined();
  });

  test("shows validation errors on empty submit", async () => {
    render(<ContactPage />);
    const submitButton = screen.getAllByRole("button", { type: "submit" })[0];
    submitButton.click();
    
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    expect(screen.getAllByText(/El nombre es obligatorio/)[0]).toBeDefined();
  });

  test("renders contact info", () => {
    render(<ContactPage />);
    const email = screen.getAllByText(/contacto@smartclub/)[0];
    expect(email).toBeDefined();
  });
});
