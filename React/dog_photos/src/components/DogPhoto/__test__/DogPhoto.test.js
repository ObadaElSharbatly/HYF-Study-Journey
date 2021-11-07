import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import DogPhoto from "../DogPhoto";

it("photos gonna increase when click the button", async () => {
  const { getByTestId, findByTestId} = render(<DogPhoto />);
  const button = getByTestId("get-dog-btn");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  const img = await findByTestId("0");
  expect(img).toBeInTheDocument();
  
  fireEvent.click(button);
  const img2 = await findByTestId("1");
  expect(img2).toBeInTheDocument();
});
