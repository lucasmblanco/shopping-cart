import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";  

import Home from '../Home'; 
//import { userEvent } from "@testing-library/user-event/dist/types/setup";






test('renders Home component', () => {
   const {asFragment} =  render(<Home />, {wrapper: MemoryRouter}); 
    
    expect(asFragment()).toMatchSnapshot(); 
})

test('should render three images elements', () => {
    const {getAllByRole} = render(<Home />, {wrapper: MemoryRouter}); 
    
    const images = getAllByRole('img'); 


    images.forEach(img => expect(img).toBeInTheDocument())

    //expect(images).toBeInTheDocument();
})

test('should render div component with a p element and span element', () => {
    const {getByText} = render(<Home />, {wrapper: MemoryRouter}); 
    
    getByText('WE MAKE THE AVAILABLE'); 
    getByText('FUTURE');
    
}); 

