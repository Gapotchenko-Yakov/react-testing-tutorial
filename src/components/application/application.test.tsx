import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocaionElement = screen.getByRole("combobox");
    expect(jobLocaionElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
