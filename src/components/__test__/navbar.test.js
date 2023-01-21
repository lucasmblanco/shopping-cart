import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

it('should render the component', () => {
  const { asFragment } = render(<NavBar />, { wrapper: MemoryRouter });

  expect(asFragment()).toMatchSnapshot();
});

it('should render three button components', () => {
  render(<NavBar />, { wrapper: MemoryRouter });

  const navigationLinks = screen.getAllByRole('link');

  expect(navigationLinks.length).toEqual(3);
});

it('should render the App with NavBar component', () => {
  render(<App />, { wrapper: MemoryRouter });

  expect(screen.getByTestId('navigation-bar')).toBeInTheDocument();
});

it('should render the chosen component by clicking corresponding link', async () => {
  render(<App />, { wrapper: MemoryRouter });

  const shopLink = screen.getByTestId('shop-link');

  userEvent.click(shopLink);

  expect(await screen.findByTestId('loading-component')).toBeInTheDocument();
});
