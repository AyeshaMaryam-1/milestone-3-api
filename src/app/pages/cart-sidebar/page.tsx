import React from "react";
import Image from "next/image";
import Link from "next/link";

const ShoppingCart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      image: "/sofa1.png",
      price: 250000.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      image: "/sofa2.png",
      price: 270000.0,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  return (
    <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-4 mx-auto group-hover:block">
      {/* Cart Items */}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 pb-8">
            <Image
              className="rounded-lg bg-gray-100"
              src={item.image}
              alt={item.name}
              width={108}
              height={105}
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.quantity} &nbsp; x &nbsp;
                <span className="text-[#B88E2F] font-semibold"> Rs. {item.price.toLocaleString("en-US")}</span>
              </p>
            </div>
            <button className="text-gray-500 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center pt-32 py-4">
        <h4 className="text-gray-600 font-medium">Subtotal</h4>
        <h4 className="text-[#B88E2F] pr-20 font-bold text-lg">
          Rs. {subtotal.toLocaleString("en-US")}
        </h4>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Footer Buttons */}
      <div className="flex justify-around mt-4">
        <button className="px-6 py-2 border border-black text-black text-sm rounded-full shadow-sm hover:bg-[#B88E2F] hover:border-none hover:text-white">
        <Link href={"/pages/cart"}>Cart</Link>
        </button>
        <button className="px-6 py-2 border border-black text-black text-sm rounded-full shadow-sm hover:bg-[#B88E2F] hover:border-none hover:text-white">
        <Link href={"/pages/checkout"}>Checkout</Link>
        </button>
        <button className="px-6 py-2 border border-black text-black text-sm rounded-full shadow-sm hover:bg-[#B88E2F] hover:border-none hover:text-white">
          Comparison
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
