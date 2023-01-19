import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";  
import Shop from '../Shop'; 


const MOCK_PRODUCTS = [
    {
        id: 1,
        name: 'Product-1', 
        price: 1, 
        added: false,
    
    }, {
        id: 2,
        name: 'Product-2', 
        price: 2, 
        added: false,
    }
]

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_PRODUCTS)
}));

test('renders correctly', async () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

test('should render a loading component', () => {

    render(<Shop />);
    const loadingElement = screen.getByText('LOADING'); 
    expect(loadingElement).toBeInTheDocument(); 

}); 

test('render a product', async () => {

    render(<Shop />) 

    await waitFor(() => {
        screen.queryByText('Product-1');
        screen.queryByText('Product-2');

    })

});
