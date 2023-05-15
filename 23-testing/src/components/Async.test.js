import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
  test("renders posts if request succeeds", async () => {
    // rewrote fetch function with our own built in function.
    // Simulating the data and format that our function needs. 
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "first post" }],
    });
    render(<Async />);

    // Act = none

    // Assert
    // getAll looks for elements immediately.
    // findAll returns a promise. It works for queries like https.
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
