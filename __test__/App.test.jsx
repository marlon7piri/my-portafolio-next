// components/MyComponent.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent from "../src/app/components/Header";

describe("MyComponent", () => {
  it("renders a heading", () => {
    render(<MyComponent />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("My Component");
  });
});
