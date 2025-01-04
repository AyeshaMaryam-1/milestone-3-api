'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../pages/cart-sidebar/page";

export default function Header() {
  // State to manage the hover effect
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu')!;

    // Function to toggle the menu
    const toggleMenu = () => {
      mobileMenu.classList.toggle('show');
    };

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', toggleMenu);

      // Cleanup event listener on component unmount
      return () => {
        menuToggle.removeEventListener('click', toggleMenu);
      };
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
      //header
    <div>
      <header className="header flex top-header py-4 bg-white text-black text-center my-2">
        {/* Logo and Website Name */}
        <div className="logo-container flex ml-28">
          <Image
            className="logo mt-1"
            src="/logo.png"
            alt="img"
            width={50}
            height={32}
          />
          <h1 className="site-name ml-2 text-[28px]">
            <strong>Furniro</strong>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="nav {`${menuOpen ? 'block' : 'hidden'}`} items flex gap-14 text-[16px] mt-3 ml-60">
          <li className="active:border-b-2 active:border-black">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="active:border-b-2 active:border-black">
            <Link href={"/pages/shop"}>Shop</Link>
          </li>
          <li className="active:border-b-2 active:border-black">
            <Link href={"/pages/blog"}>Blog</Link>
          </li>
          <li className="active:border-b-2 active:border-black">
            <Link href={"/pages/contact"}>Contact</Link>
          </li>
        </ul>

        {/* Icons Section  */}
        <div className="icon-container flex ml-44 mt-3 gap-10">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"
              />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
              />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
              />
            </svg>
          </button>
          {/* Wrap the cart button and cart icon in a div for hover */}
          <div
            className="flex items-center gap-2 cursor-pointer"
          >
            <button>
              <Link href={"/pages/cart"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" onClick={() => setIsHovered(!isHovered)}>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
         {/* Mobile Menu Button */}
        <button className="menu-toggle mr-4" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <div className="mobile-menu">
            <Link href={"/"}>Home</Link><br />
            <Link href={"/pages/shop"}>Shop</Link><br />
            <Link href={"/pages/blog"}>Blog</Link><br />
            <Link href={"/pages/contact"}>Contact</Link><br />
      </div>

      </header>

      {/* Sidebar that appears on hover */}
      <div
        className={`group fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform duration-30000 ${
          isHovered ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Sidebar />
      </div>
    </div>
  );
}
