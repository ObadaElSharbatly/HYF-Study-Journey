import { render, screen } from '@testing-library/react';
import Person from '../Person';


test('If the `person` prop given is `null` or `undefined` it should not render anything', () => {
  render(<Person />);
  const fName = screen.queryByText(/First name/i);
  const lName = screen.queryByText(/Last name/i);
  const Email = screen.queryByText(/Email/i);
  expect(fName).not.toBeInTheDocument();
  expect(lName).not.toBeInTheDocument();
  expect(Email).not.toBeInTheDocument();
});

test('If any of the `person` prop given is `null` or `undefined` it should not render anything', () => {
  render(<Person fName="Shadi" lName="Gaser" />);
  const fName = screen.queryByText(/First name/i);
  const lName = screen.queryByText(/Last name/i);
  const Email = screen.queryByText(/Email/i);
  expect(fName).not.toBeInTheDocument();
  expect(lName).not.toBeInTheDocument();
  expect(Email).not.toBeInTheDocument();
});

