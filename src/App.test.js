import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {fetchAPI} from './helpers';


describe('Little Lemon Testing', () => {
  test('Renders Little Lemon Home Page', () => {
    render(<App />);
    const screenElement = screen.getByText(/Copyright ©Little Lemon Restaurant/i);
    expect(screenElement).toBeInTheDocument();
  })

    test('Click the Reserve now button and check that update Date is Working', () => {
      render(<App />);
      const navigateToBookingButton = screen.getByText('Reserve a Table');
      fireEvent.click(navigateToBookingButton);
      expect(window.location.pathname).toBe("/booking");
      // This will check if the fetchAPI returns with todays date onLoad to be the same option length;
      const expectedDate = fetchAPI(new Date());
      // +2 accounts for the option of Anniversary or Birthday in the occasion dropdown so this will load based on todays date
     expect(screen.getAllByRole('option').length).toBe(expectedDate.length + 3)
  });

});

describe('Little Lemon Form Testing', () => {

  test('Click the Reserve now button to be disabled since Name  is not filled out', () => {
      render(<App />);
      // on Seleect will call the updateTimes
     const selectDate = screen.getByLabelText(/Choose Date/);
     fireEvent.change(selectDate, {target: {value: '2023-09-01'}});
     const expectedDate = fetchAPI(new Date('2023-09-01'));
     expect(screen.getAllByRole('option').length).toBe(expectedDate.length + 3)
     const submitButton = screen.getByRole('button');
     expect(submitButton).toBeDisabled();
  });
  test('Click the Reserve now button to be disabled since Name  with all required fields filled out', () => {
    render(<App />);
      // on Seleect will call the updateTimes
     const selectDate = screen.getByLabelText(/Choose Date/);
     fireEvent.change(selectDate, {target: {value: '2023-09-01'}});
     const selectTime = screen.getByLabelText(/Choose Time/);
     fireEvent.change(selectTime, {target: {value: '17:00'}}); 
     const setNameInput = screen.getByLabelText(/Enter Name/);
     fireEvent.change(setNameInput, {target: {value: 'Paul Joe'}});
     const setNumberOfGuests = screen.getByLabelText(/Number of Guests/);
     fireEvent.change(setNumberOfGuests, {target: {value: 7}});
     const setOccasion = screen.getByLabelText(/Occasion/);
     fireEvent.change(setOccasion, {target: {value: "Birthday"}});
     const submitButton = screen.getByRole('button');
     expect(submitButton).not.toBeDisabled();
  });
});