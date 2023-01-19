import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";  
import Contact from '../Contact'; 

test('should render component', () => {
    const {asFragment} = render(<Contact />, {wrapper: MemoryRouter}); 

    expect(asFragment()).toMatchSnapshot(); 
})

test('should display an image component', () => {
    
    const {getByAltText} = render(<Contact />, {wrapper: MemoryRouter});  
    
    expect(getByAltText('Store front')).toBeInTheDocument(); 

}); 

test('should display contact element', () => {
    const {getByText, getAllByRole } = render(<Contact />, {wrapper: MemoryRouter});  

    expect(getByText('FIND US')).toBeInTheDocument();
    expect(getAllByRole('link').length).toEqual(4)
})

