import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders Badge component", () => {
    const { getByText } = render(<Badge>Test Badge</Badge>);
    expect(getByText("Test Badge")).toBeDefined();
  });

  test("renders with default variant", () => {
    const { getByText } = render(<Badge variant="default">Badge</Badge>);
    expect(getByText("Badge")).toBeDefined();
  });

  test("renders with secondary variant", () => {
    const { getByText } = render(<Badge variant="secondary">Badge</Badge>);
    expect(getByText("Badge")).toBeDefined();
  });
});
