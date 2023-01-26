import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { AiOutlineLoading } from 'react-icons/ai';

export default function Shop({ addProduct, checkProductStatus }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(
          'https://fakestoreapi.com/products/category/electronics',
        );
        if (res.ok) {
          const data = await res.json();
          setProducts([...data]);
          setIsLoading(false);
        } else {
          setError("Can't obtain products information");
        }
      } catch (err) {
        setError("Can't connect with the database");
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <div
        data-testid="loading-component"
        className="flex items-center justify-center min-h-[calc(100vh_-_14rem)]">
        <div
          className="flex items-center backdrop-blur-3xl backdrop-brightness-50
               text-white-accent p-1 rounded-xl animate-fade-in-bck-open border border-gray-500">
          <span className="inline-block animate-spin p-1">
            <AiOutlineLoading />
          </span>
          <span className="font-inter p-1">LOADING</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh_-_14rem)]">
        <div
          className=" font-inter text-xl backdrop-blur-3xl backdrop-brightness-50
               text-white-accent p-4 rounded-xl animate-fade-in-bck-open border border-gray-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div
      data-testid="shop-products-component"
      className="min-h-[calc(100vh_-_14rem)] flex justify-center">
      <div className="w-10/12 text-3xl font-inter flex flex-col desktop:grid grid-cols-3 grid-rows-2 gap-10 p-10">
        {products.map((product) => {
          const status = checkProductStatus(product.id);
          return (
            <Product
              key={product.id}
              data={product}
              addProduct={addProduct}
              quantity={1}
              status={status}
            />
          );
        })}
      </div>
    </div>
  );
}
