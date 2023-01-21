import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

it('should render the component', () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});

it('should render image component', () => {
  render(<Header />);

  expect(screen.getByRole('img')).toBeInTheDocument();
});
