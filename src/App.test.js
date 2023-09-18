import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { Router } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
  const handleSubmit = jest.fn();

  render(<BookingForm onSubmit={handleSubmit}/>)
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes function returns correct expected value", () => {
  const fetchData = require("../public/fetchData")

  const initializeTimes = jest.fn((x) => {
    const initialState = fetchData.fetchAPI(x);
    return initialState;
  })

  const testDate = new Date("June 29, 2023");
  const availableTimes = initializeTimes(testDate);
  expect(availableTimes).not.toHaveLength(0);
})

test("updateTimes function returns new set of times", () => {
  const fetchData = require("../public/fetchData")

  const updateTimes = jest.fn((state, action) => {
    state = fetchData.fetchAPI(action);
    return state;
  })

  const testDate = new Date("June 29, 2023");

  const initialState = fetchData.fetchAPI(testDate)

  const newDate = new Date("July 5, 2023");

  const newTimes = updateTimes(initialState, newDate);

  expect(newTimes).not.toStrictEqual(initialState);
  expect(newTimes).not.toHaveLength(0);
})

test("Form is submitted after user clicks submit button", () => {
  const handleSubmit = jest.fn();

  render(<BookingForm onSubmit={handleSubmit}/>);

  const submitButton = screen.getByText(/Make your/);
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
})

test("Input elements have the correct attributes.", () => {
  const handleSubmit = jest.fn();

  render(<BookingForm onSubmit={handleSubmit}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);

  expect(nameInput).toHaveAttribute("type", "text");
  expect(nameInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("required");
  expect(timeInput).toHaveAttribute("required");
  expect(numberInput).toHaveAttribute("type", "number");
  expect(numberInput).toHaveAttribute("required");
  expect(occasionInput).toHaveAttribute("required");
});

test("Submit button is not disabled when all inputs are valid.", () => {
  const handleSubmit = jest.fn();
  const props = {dispatch: jest.fn()};

  render(<BookingForm onSubmit={handleSubmit} {...props}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = document.getElementById("submit");

  fireEvent.click(nameInput);
  fireEvent.change(nameInput, {"target": {"value":"John"}});
  fireEvent.click(dateInput);
  fireEvent.change(dateInput, {"target": {"value": "2123-01-01"}});
  fireEvent.click(timeInput);
  fireEvent.change(timeInput, {"target": {"value": "17:00"}});
  fireEvent.click(numberInput);
  fireEvent.change(numberInput, {"target": {"value": "7"}});
  fireEvent.click(occasionInput);
  fireEvent.change(occasionInput, {"target": {"value": "other"}});

  expect(submitButton).not.toHaveAttribute("disabled");
});

test("Submit button is disabled when all inputs are valid, except date.", () => {
  const handleSubmit = jest.fn();
  const props = {dispatch: jest.fn()};

  render(<BookingForm onSubmit={handleSubmit} {...props}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = document.getElementById("submit");

  fireEvent.click(nameInput);
  fireEvent.change(nameInput, {"target": {"value":"John"}});
  fireEvent.click(dateInput);
  fireEvent.change(dateInput, {"target": {"value": ""}});
  fireEvent.click(timeInput);
  fireEvent.change(timeInput, {"target": {"value": "17:00"}});
  fireEvent.click(numberInput);
  fireEvent.change(numberInput, {"target": {"value": "7"}});
  fireEvent.click(occasionInput);
  fireEvent.change(occasionInput, {"target": {"value": "other"}});

  expect(submitButton).toHaveAttribute("disabled");
});

test("Submit button is disabled when all inputs are valid, except name.", () => {
  const handleSubmit = jest.fn();
  const props = {dispatch: jest.fn()};

  render(<BookingForm onSubmit={handleSubmit} {...props}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = document.getElementById("submit");

  fireEvent.click(nameInput);
  fireEvent.change(nameInput, {"target": {"value":""}});
  fireEvent.click(dateInput);
  fireEvent.change(dateInput, {"target": {"value": "2123-01-01"}});
  fireEvent.click(timeInput);
  fireEvent.change(timeInput, {"target": {"value": "17:00"}});
  fireEvent.click(numberInput);
  fireEvent.change(numberInput, {"target": {"value": "7"}});
  fireEvent.click(occasionInput);
  fireEvent.change(occasionInput, {"target": {"value": "other"}});

  expect(submitButton).toHaveAttribute("disabled");
});

test("Submit button is disabled when all inputs are valid, except time.", () => {
  const handleSubmit = jest.fn();
  const props = {dispatch: jest.fn()};

  render(<BookingForm onSubmit={handleSubmit} {...props}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = document.getElementById("submit");

  fireEvent.click(nameInput);
  fireEvent.change(nameInput, {"target": {"value":"John"}});
  fireEvent.click(dateInput);
  fireEvent.change(dateInput, {"target": {"value": "2123-01-01"}});
  fireEvent.click(timeInput);
  fireEvent.change(timeInput, {"target": {"value": "Select a time"}});
  fireEvent.click(numberInput);
  fireEvent.change(numberInput, {"target": {"value": "7"}});
  fireEvent.click(occasionInput);
  fireEvent.change(occasionInput, {"target": {"value": "other"}});

  expect(submitButton).toHaveAttribute("disabled");
});

test("Submit button is disabled when number of guests exceeds 10 people, while all other inputs are valid.", () => {
  const handleSubmit = jest.fn();
  const props = {dispatch: jest.fn()};

  render(<BookingForm onSubmit={handleSubmit} {...props}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = document.getElementById("submit");

  fireEvent.click(nameInput);
  fireEvent.change(nameInput, {"target": {"value":"John"}});
  fireEvent.click(dateInput);
  fireEvent.change(dateInput, {"target": {"value": "2123-01-01"}});
  fireEvent.click(timeInput);
  fireEvent.change(timeInput, {"target": {"value": "17:00"}});
  fireEvent.click(numberInput);
  fireEvent.change(numberInput, {"target": {"value": "12"}});
  fireEvent.click(occasionInput);
  fireEvent.change(occasionInput, {"target": {"value": "other"}});

  expect(submitButton).toHaveAttribute("disabled");
});

test("Submit button is disabled when all inputs are valid, except occasion.", () => {
  const handleSubmit = jest.fn();
  const props = {dispatch: jest.fn()};

  render(<BookingForm onSubmit={handleSubmit} {...props}/>)

  const nameInput = screen.getByLabelText(/Name/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);
  const numberInput = screen.getByLabelText(/Number of Guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = document.getElementById("submit");

  fireEvent.click(nameInput);
  fireEvent.change(nameInput, {"target": {"value":"John"}});
  fireEvent.click(dateInput);
  fireEvent.change(dateInput, {"target": {"value": "2123-01-01"}});
  fireEvent.click(timeInput);
  fireEvent.change(timeInput, {"target": {"value": "17:00"}});
  fireEvent.click(numberInput);
  fireEvent.change(numberInput, {"target": {"value": "7"}});
  fireEvent.click(occasionInput);
  fireEvent.change(occasionInput, {"target": {"value": "Select an occasion"}});

  expect(submitButton).toHaveAttribute("disabled");
});