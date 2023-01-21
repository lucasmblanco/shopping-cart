import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProductInCart from '../ProductInCart';

const MOCK_PRODUCT = {
  id: 1,
  title: 'MockProduct',
  quantity: 1,
  price: 1,
};

const addFunction = jest.fn();
const deleteFunction = jest.fn();

it('should render component', () => {
  const { asFragment } = render(
    <ProductInCart
      product={MOCK_PRODUCT}
      deleteProduct={deleteFunction}
      addQuantity={addFunction}
    />,
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should display correct amount of quantity', async () => {
  render(
    <ProductInCart
      product={MOCK_PRODUCT}
      deleteProduct={deleteFunction}
      addQuantity={addFunction}
    />,
  );

  const incrementQuantity = screen.getByRole('button', { name: '+' });
  //const decrementQuantity = screen.getByTestId('decrement-quantity');

  await userEvent.click(incrementQuantity);
  //userEvent.click(decrementQuantity);

  expect(addFunction).toHaveBeenCalled();
});

it('should delete product', async () => {
  render(
    <ProductInCart
      product={MOCK_PRODUCT}
      deleteProduct={deleteFunction}
      addQuantity={addFunction}
    />,
  );

  const deleteProduct = screen.getByTestId('delete-product');

  await userEvent.click(deleteProduct);

  expect(deleteFunction).toHaveBeenCalled();
});
