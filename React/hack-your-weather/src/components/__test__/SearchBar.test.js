import { fireEvent, render } from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import App from "../../App";
import SearchBar from "../SearchBar";

describe("search Bar Component", () => {
  it("input field with a placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText(/write a city name/i);
    expect(input).toBeInTheDocument();
  });

  it("Button is disabled when the input empty", () => {
    const { getByPlaceholderText, getByRole } = render(
      <SearchBar searchValue="" />
    );
    const input = getByPlaceholderText(/write a city name/i);
    const searchButton = getByRole("button", { name: /search/i });

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("");
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeDisabled();
  });

  it("Button is active when writing something in the input field", () => {
    const { getByPlaceholderText, getByRole } = render(
      <SearchBar searchValue="anything"/>
    );
    const input = getByPlaceholderText(/write a city name/i);
    const searchButton = getByRole("button", { name: /search/i });

    expect(input).toBeInTheDocument();
    expect(searchButton).not.toBeDisabled();
  });


});
