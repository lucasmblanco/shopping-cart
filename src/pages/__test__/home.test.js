import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../Home';

test('renders Home component', () => {
  const { asFragment } = render(<Home />, { wrapper: MemoryRouter });

  expect(asFragment()).toMatchSnapshot();
});

test('should render three images elements', () => {
  render(<Home />, { wrapper: MemoryRouter });

  const images = screen.getAllByRole('img');

  images.forEach((img) => expect(img).toBeInTheDocument());
});

test('should render div component with a p element and span element', () => {
  render(<Home />, { wrapper: MemoryRouter });

  screen.getByText('WE MAKE THE AVAILABLE');
  screen.getByText('FUTURE');
}); 

