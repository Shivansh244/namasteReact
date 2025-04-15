
import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test('should load Contact Us component', () => { 
    render(<Contact/>)

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test('should load button inside Contact component', () => {

    render(<Contact/>)

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test('should load input name inside Contact component', () => {

    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("First Name");

    expect(inputName).toBeInTheDocument();
});

test('should load 2 input boxes in the Contact Component', () => {

    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
 });