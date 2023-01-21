import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';  
import userEvent from "@testing-library/user-event";
import App from './App'; 

test('interacting with link from home component should replace content with shop component', async() =>{
    render(<App />, {wrapper: MemoryRouter});
    const images = screen.getAllByAltText('promo'); 
    const shopLink = screen.getByRole('link', {name: 'SHOP NOW'}); 

    await userEvent.click(shopLink); 

     images.forEach(image => {
         expect(image).not.toBeInTheDocument();
    })
})

