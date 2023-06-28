import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes} from './App';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes function returns correct expected value", () => {
  const testArray = ["a", "b", "c"];

  expect(initializeTimes(testArray)).toStrictEqual(["a", "b", "c"]);
})

test("updateTimes function returns the same value that is provided in state", () => {
  const testState = ["d", "e", "f"];

  expect(updateTimes(testState, null)).toStrictEqual(["d", "e", "f"]);
})

test("Form is submitted after user clicks submit button", () => {
  const handleSubmit = jest.fn(e => e.preventDefault());

  render(<BookingForm onSubmit={handleSubmit}/>);

  const submitButton = screen.getByText(/Make your/);
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
})