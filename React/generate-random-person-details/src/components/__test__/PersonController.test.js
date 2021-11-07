import React from "react";
import {  render, screen } from "@testing-library/react";
import PersonController from "../PersonController";
import { setupServer } from 'msw/node'
import { handlers } from "../../mocks/test_handlers";


const server = setupServer(handlers[0])
beforeAll(() => {
    server.listen({onUnhandledRequest: 'error'});
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => {
    server.close();
  });

test("render a person info", async () => {
  // Render components, perform requests, API communication is covered.
  const { findByText } = render(<PersonController />);
  const fName = await findByText(/first name/i);
  const lName = await findByText(/last name/i);
  const email = await findByText(/email/i);
  expect(fName).toBeInTheDocument();
  expect(lName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test("when there is no data loading text appears", () => {
  // Render components, perform requests, API communication is covered.
  const { queryByText, getByText } = render(<PersonController />);
  const fName = queryByText(/first name/i);
  const lName = queryByText(/last name/i);
  const email = queryByText(/email/i);
  const loading = getByText(/loading.../i)
  expect(fName).not.toBeInTheDocument();
  expect(lName).not.toBeInTheDocument();
  expect(email).not.toBeInTheDocument();
  expect(loading).toBeInTheDocument();
});

test("show error to the user if the response were an error", async () => {
  server.use(handlers[1])
  const { findByText, queryByText } = render(<PersonController />);
  const fName = queryByText(/first name/i);
  const lName = queryByText(/last name/i);
  const email = queryByText(/email/i);
  const err = await findByText(/shutdown your pc/i)
  expect(fName).not.toBeInTheDocument();
  expect(lName).not.toBeInTheDocument();
  expect(email).not.toBeInTheDocument();
  expect(err).toBeInTheDocument();
  
});
