import React  from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';


it('the button text is correct',  () => {
  const { getByTestId } = render(<Button/>)
  const buttonTxt = getByTestId("get-dog-btn");

  expect(buttonTxt.textContent).toBe("Get a dog!");
});

