import { describe, test, expect, afterEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";

describe("Card", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders Card component", () => {
    const { getByText } = render(<Card>Card Content</Card>);
    expect(getByText("Card Content")).toBeDefined();
  });

  test("renders CardHeader", () => {
    const { getByText } = render(<CardHeader>Header Content</CardHeader>);
    expect(getByText("Header Content")).toBeDefined();
  });

  test("renders CardTitle", () => {
    const { getByText } = render(<CardTitle>Card Title</CardTitle>);
    expect(getByText("Card Title")).toBeDefined();
  });

  test("renders CardDescription", () => {
    const { getByText } = render(<CardDescription>Card Description</CardDescription>);
    expect(getByText("Card Description")).toBeDefined();
  });

  test("renders CardContent", () => {
    const { getByText } = render(<CardContent>Card Content</CardContent>);
    expect(getByText("Card Content")).toBeDefined();
  });

  test("renders CardFooter", () => {
    const { getByText } = render(<CardFooter>Footer</CardFooter>);
    expect(getByText("Footer")).toBeDefined();
  });

  test("renders nested card components", () => {
    const { getByText } = render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Main Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    
    expect(getByText("Title")).toBeDefined();
    expect(getByText("Description")).toBeDefined();
    expect(getByText("Main Content")).toBeDefined();
    expect(getByText("Footer")).toBeDefined();
  });
});
