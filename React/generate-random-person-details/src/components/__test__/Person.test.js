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

test('if "person" is not null but missing any information like email will be Email: --', () => {
  const personInfo = [
    {
      info: "Shady",
      title: "First Name",
    },
    {
      info: "Gaser",
      title: "Last Name",
    },
    {
      info: "--",
      title: "Email",
    },
  ]

  render(<Person personInfo={personInfo} />);
  const fName = screen.queryByText(/First name/i);
  const lName = screen.queryByText(/Last name/i);
  const email = screen.queryByText(/Email/i);
  expect(fName).toBeInTheDocument();
  expect(fName.textContent).toBe("First Name: Shady");

  expect(lName).toBeInTheDocument();
  expect(lName.textContent).toBe("Last Name: Gaser");

  expect(email).toBeInTheDocument();
  expect(email.textContent).toBe("Email: --");
});

test(`If we give a person object with the fields first_name,last_name
    and email then those fields should be in the DOM.`, () => {
  const personInfo = [
    {
      info: "Shady",
      title: "First Name",
    },
    {
      info: "Gaser",
      title: "Last Name",
    },
    {
      info: "Shadi@yahoo.com",
      title: "Email",
    },
  ]
  render(<Person personInfo={personInfo} />);
  const fName = screen.getByText(/First name/i);
  const lName = screen.getByText(/Last name/i);
  const email = screen.getByText(/Email/i);
  expect(fName).toBeInTheDocument();
  expect(fName.textContent).toBe("First Name: Shady");

  expect(lName).toBeInTheDocument();
  expect(lName.textContent).toBe("Last Name: Gaser");

  expect(email).toBeInTheDocument();
  expect(email.textContent).toBe("Email: Shadi@yahoo.com");
  
});

