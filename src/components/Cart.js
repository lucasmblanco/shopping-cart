import React, { useState } from 'react';
import ProductInCart from './Cart-components/ProductInCart';
import { HiShoppingCart } from 'react-icons/hi';
import EmptyCart from './Cart-components/EmptyCart';

export default function Cart({ products, deleteProduct, addQuantity, total }) {
  const [open, setOpen] = useState(false);

  function openCart() {
    setOpen(!open);
  }

  return (
    <>
      <button
        data-testid="open"
        className=" h-12 text-white font-inter rounded-tr-xl rounded-br-xl bg-red-accent border-light-red-accent 
        border-t-2 border-b-2 border-r-2 p-4"
        onClick={openCart}>
        <div className="hover:drop-shadow-nxl transition-all duration-500 ">
          <HiShoppingCart />
        </div>
      </button>
      {products.length > 0 && (
        <div
          className="flex items-center justify-center text-sm absolute 
        left-[64.5rem] top-1 rounded-full h-5 w-5 animate-fade-in-bck-open bg-lightest-blue-accent font-inter bg-opacity-75 ">
          {products.reduce((acc, product) => acc + product.quantity, 0)}
        </div>
      )}

      {open && (
        <div
          data-testid="cart-body"
          className="flex flex-col absolute m-3 w-96 h-96 top-[3rem] desktop:top-[3rem] left-[20rem] desktop:left-cart-left-position p-4 text-black 
                rounded-[calc(0.5rem_+_2px)] backdrop-blur-3xl backdrop-brightness-50
                font-inter text-center animate-open-anim">
          <div className="flex justify-center p-2 text-lightest-blue-accent">
            <HiShoppingCart />
          </div>

          <div className="overflow-y-auto h-80 ">
            {products.length ? (
              products.map((product) => {
                return (
                  <ProductInCart
                    key={product.id}
                    product={product}
                    deleteProduct={deleteProduct}
                    addQuantity={addQuantity}
                  />
                );
              })
            ) : (
              <EmptyCart />
            )}
          </div>

          <div className="flex p-2 justify-between bg-lightest-blue-accent rounded-xl m-2">
            <div className="flex items-center p-2">Total: ${total}</div>
            <button
              className="text-white-accent p-2 transition-all duration-500 
                        bg-red-accent rounded-lg hover:bg-light-red-accent border-2 border-light-red-accent hover:border-red-accent ">
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
