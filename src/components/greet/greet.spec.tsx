import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  xit("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    it("renders with a name", () => {
      render(<Greet name="Yakov" />);
      const textElement = screen.getByText("Hello, Yakov");
      expect(textElement).toBeInTheDocument();
    });
  });
});
