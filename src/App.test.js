import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

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