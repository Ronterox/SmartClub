import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Input, Textarea } from "./Input";

describe("Input", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders Input component", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText("Enter text")).toBeDefined();
  });

  test("handles value changes", () => {
    const handleChange = (e: any) => {
      expect(e.target.value).toBe("test");
    };
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChange={handleChange} />
    );
    const input = getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "test" } });
  });

  test("can be disabled", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" disabled />
    );
    const input = getByPlaceholderText("Enter text");
    expect(input.hasAttribute("disabled")).toBe(true);
  });
});

describe("Textarea", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders Textarea component", () => {
    const { getByPlaceholderText } = render(<Textarea placeholder="Enter message" />);
    expect(getByPlaceholderText("Enter message")).toBeDefined();
  });

  test("handles value changes", () => {
    const handleChange = (e: any) => {
      expect(e.target.value).toBe("test");
    };
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Enter message" onChange={handleChange} />
    );
    const textarea = getByPlaceholderText("Enter message");
    fireEvent.change(textarea, { target: { value: "test" } });
  });

  test("can be disabled", () => {
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Enter message" disabled />
    );
    const textarea = getByPlaceholderText("Enter message");
    expect(textarea.hasAttribute("disabled")).toBe(true);
  });
});
