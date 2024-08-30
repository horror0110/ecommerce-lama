"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>

          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/26842786/pexels-photo-26842786/free-photo-of-passenger-ship-near-perito-moreno-glacier-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}

                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>

                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="text-sm text-gray-500 ">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/26842786/pexels-photo-26842786/free-photo-of-passenger-ship-near-perito-moreno-glacier-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}

                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>

                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="text-sm text-gray-500 ">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>

            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
