import Shop from '../Shop';
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

const mockResponse = {
  ok: true,
  json: () =>
    Promise.resolve([
      {
        id: 1,
        title: 'MockProduct',
        image: 'abc.jpg',
        rating: {
          rate: 1,
        },
        price: 1,
        category: 'MockCategory',
      },
    ]),
};

global.fetch = jest.fn(() => Promise.resolve(mockResponse));

test('should render the component', () => {
  const { asFragment } = render(<Shop />);

  expect(asFragment()).toMatchSnapshot();

  cleanup();
});

test('should render loading component', async () => {
  render(<Shop />);

  const loadingComponent = await screen.findByTestId('loading-component');

  expect(loadingComponent).toBeInTheDocument();

  cleanup();
});

test('should call fetch request on render', async () => {
  render(<Shop />);

  expect(fetch).toHaveBeenCalled();

  cleanup();
});

test.skip('should render product component', async () => {
  render(<Shop />);

  const productComponent = await screen.findByTestId('shop-products-component');

  expect(productComponent).toBeInTheDocument();

  cleanup();
});
