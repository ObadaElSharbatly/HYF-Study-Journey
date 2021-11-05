import React  from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import DogGallery from "../DogGallery";
import "@testing-library/jest-dom/extend-expect"

it("when there are no photo I get text instead",  ()=>{
    render(<DogGallery dogPhotos={[]}/>)
    const iniTxt = screen.getByText(/Get your first dog by clicking the button/i);
    const img = screen.queryAllByAltText('dog');
    expect(iniTxt).toBeInTheDocument()
    expect(img.length).toBe(0)
});

it("when I get one image url the text disappear and I get 1 image",  ()=>{
    const imgUrl = "https://images.dog.ceo/breeds/setter-english/n02100735_6469.jpg"
    render(<DogGallery dogPhotos={[imgUrl]}/>)
    const iniTxt = screen.queryByText(/Get your first dog by clicking the button/i);
    const img = screen.getAllByAltText('dog');
    expect(iniTxt).not.toBeInTheDocument()
    expect(img.length).toBe(1)
    expect(img[0].src).toBe(imgUrl);
});

it("when I get more than one url I get the same quantity of images",  ()=>{
    const imgUrl = [
        "https://images.dog.ceo/breeds/setter-english/n02100735_6469.jpg",
        "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
        "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_2836.jpg"
    ]
    render(<DogGallery dogPhotos={imgUrl}/>)
    const iniTxt = screen.queryByText(/Get your first dog by clicking the button/i);
    const img = screen.getAllByAltText('dog');
    expect(iniTxt).not.toBeInTheDocument()
    expect(img.length).toBe(3)
    expect(img[0].src).toBe(imgUrl[0]);
    expect(img[1].src).toBe(imgUrl[1]);
    expect(img[2].src).toBe(imgUrl[2]);
});

