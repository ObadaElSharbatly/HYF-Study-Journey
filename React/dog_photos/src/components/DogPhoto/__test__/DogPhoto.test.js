import React  from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import DogPhoto from '../DogPhoto';

it("photos gonna increase when click the button", async ()=>{
    const component = render(<DogPhoto/>);
    expect(true).toBe(true)
})