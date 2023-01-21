import React from "react";
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Contact from '../Contact';

test('should render component', () => {
  const { asFragment } = render(<Contact />, { wrapper: MemoryRouter });

  expect(asFragment()).toMatchSnapshot();
});

test('should display an image component', () => {
  render(<Contact />, { wrapper: MemoryRouter });

  expect(screen.getByAltText('Store front')).toBeInTheDocument();
});

test('should display contact element', () => {
  render(<Contact />, { wrapper: MemoryRouter });

  expect(screen.getByText('FIND US')).toBeInTheDocument();
  expect(screen.getAllByRole('link').length).toEqual(4);
});

