import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders with default props", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole("button");
    expect(button).toBeDefined();
    expect(button.textContent).toBe("Click me");
  });

  test("renders with primary variant", () => {
    const { getByRole } = render(<Button variant="primary">Button</Button>);
    const button = getByRole("button");
    expect(button).toBeDefined();
  });

  test("renders with secondary variant", () => {
    const { getByRole } = render(<Button variant="secondary">Button</Button>);
    const button = getByRole("button");
    expect(button).toBeDefined();
  });

  test("renders with sm size", () => {
    const { getByRole } = render(<Button size="sm">Button</Button>);
    const button = getByRole("button");
    expect(button).toBeDefined();
  });

  test("shows loading state", () => {
    const { getByRole } = render(<Button isLoading>Loading</Button>);
    const button = getByRole("button");
    expect(button).toBeDefined();
    expect(button.hasAttribute("disabled")).toBe(true);
  });

  test("is disabled when disabled prop is set", () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    const button = getByRole("button");
    expect(button).toBeDefined();
    expect(button.hasAttribute("disabled")).toBe(true);
  });
});
