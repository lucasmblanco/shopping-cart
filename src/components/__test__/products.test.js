import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Product from '../Product';

const mockProduct = {
  id: 1,
  title: 'MockProduct',
  image: 'abc.jpg',
  rating: {
    rate: 1,
  },
  price: 1,
  category: 'MockCategory',
};

const ADD_MOCK = jest.fn();

const STATUS_MOCK = true;

it('should render the component with passing data', () => {
  const { asFragment } = render(<Product data={mockProduct} />);

  expect(asFragment()).toMatchSnapshot();
});

it('should add product to cart', async () => {
  render(<Product data={mockProduct} addProduct={ADD_MOCK} />);

  const addButton = screen.getByText('ADD TO CART');

  await userEvent.click(addButton);

  expect(ADD_MOCK).toHaveBeenCalled();
});

it('should show product status', async () => {
  render(
    <Product data={mockProduct} addProduct={ADD_MOCK} status={STATUS_MOCK} />,
  );

  const status = screen.getByTestId('product-added-message');

  expect(status).toBeInTheDocument();
});
