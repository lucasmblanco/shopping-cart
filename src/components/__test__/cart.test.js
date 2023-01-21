import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from '../Cart';

test('should render component', () => {
  const { asFragment } = render(<Cart products={[]} />);

  expect(asFragment()).toMatchSnapshot();
});

test('should render a button component', () => {
  render(<Cart products={[]} />);

  expect(screen.getByTestId('open')).toBeInTheDocument();
});

it('should open the cart body and must be empty', async () => {
  render(<Cart products={[]} />);

  const button = screen.getByTestId('open');

  userEvent.click(button);

  expect(await screen.findByTestId('cart-body')).toBeInTheDocument();
  expect(await screen.findByTestId('Empty-cart')).toBeInTheDocument();
});

test('should open the cart body and with a product', async () => {
  render(<Cart products={[{ id: 1, title: 'Product', quantity: 1 }]} />);

  const button = screen.getByTestId('open');

  await userEvent.click(button);

  expect(await screen.findByTestId('product-in-cart')).toBeInTheDocument();
});
