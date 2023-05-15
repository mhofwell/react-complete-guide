// import Greeting from "./Greeting";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// // describe creates a testing 'suite'
// describe("<Greeting />", () => {
//   test("Renders hello world", () => {
//     // Arrange
//     render(<Greeting />);

//     // Act (perform main action)
//     // here .. nothing

//     // Assert
//     const helloWorldElement = screen.getByText(/hello world/i);
//     // screen.getByText('Hello World', {exact: true});

//     expect(helloWorldElement).toBeInTheDocument();
//   });

//   test("renders changed if button is clicked", () => {
//     // Arrange
//     render(<Greeting />);

//     // Act (perform main action)
//     const buttonElement = screen.getByRole('button');
//     userEvent.click(buttonElement)

//     //Assert
//     const changedText = screen.getByText('Changed!');
//     expect(changedText).toBeInTheDocument();

//   });

//   test("renders good to see you if button is not clicked", () => {
//     // Arrange
//     render(<Greeting />);

//     // Assert
//     const changedText = screen.getByText(/Good to see you!/i);
//     // screen.getByText('Hello World', {exact: true});

//     expect(changedText).toBeInTheDocument();
//   });

//   // Use 3 A's
//   // Arrange - Set up test data, conditions and environment.
//   // Act - Run logic that should be tested.
//   // Assert - Look at the output and see if it matches expectations.
// });

// becuase we're testing Greeting and Output together this could be called an integration test as well. 


import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
