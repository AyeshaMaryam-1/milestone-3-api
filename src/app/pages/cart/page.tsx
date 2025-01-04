"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
  // Example cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/sofa1.png",
    },
  ]);

  // Function to update quantity and subtotal dynamically
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity, subtotal: item.price * newQuantity }
          : item
      )
    );
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="banner-container flex flex-col md:flex-row items-center overflow-hidden">
        <Image
          className="banner"
          src="/banner.png"
          alt="img"
          width={1440}
          height={316}
        />
        <div className="absolute mx-[620px]">
          <Image className="mx-auto" src="/logo.png" alt="img" width={50} height={32} />
          <h1 className="text-[44px] text-center font-semibold">Cart</h1>
          <li className="flex ml-4 ">
            <p className="font-semibold">Home</p>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 24">
              <path
                fill="black"
                fillRule="evenodd"
                d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
              ></path>
            </svg>
            Cart
          </li>
        </div>
      </div>

      <div className="ml-10 flex">
        <div className="p-4 mt-6 ml-16">
          <table className="w-82 border-collapse">
            <thead>
              <tr className="text-left bg-[#f8e9d8]">
                <th className="p-8 text-gray-800 font-semibold">Product</th>
                <th className="p-4 text-gray-800 font-semibold">Price</th>
                <th className="p-4 text-gray-800 font-semibold">Quantity</th>
                <th className="p-4 text-gray-800 font-semibold">Subtotal</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 mt-4 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#f8e9d8] flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt="Product Image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <span className="text-gray-800">{item.name}</span>
                  </td>
                  <td className="p-4 text-gray-600">Rs. {item.price.toLocaleString()}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-12 h-8 border border-gray-300 text-center"
                      onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                    />
                  </td>
                  <td className="p-4 text-gray-800 font-semibold">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <button
                      className="text-yellow-500 hover:text-red-500"
                      onClick={() =>
                        setCartItems((prevItems) =>
                          prevItems.filter((cartItem) => cartItem.id !== item.id)
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32m-200 0H360v-72h304z"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#fdf4e3] p-6 mt-10 mr-20 w-80 mx-auto">
          <h2 className="text-xl font-bold text-gray-800 text-center pt-4 mb-12">
            Cart Totals
          </h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-black font-semibold pb-4">Subtotal</span>
            <span className="text-md text-gray-500">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-black font-semibold pb-4">Total</span>
            <span className="text-md text-gray-500">
              Rs. { subtotal.toLocaleString()}
            </span>
          </div>
          <Link href={"/pages/checkout"}>
            <button className="w-40 ml-12 center py-2 border border-gray-500 text-gray-800 rounded-lg hover:bg-[#B88E2F] hover:text-white hover:border-none">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
