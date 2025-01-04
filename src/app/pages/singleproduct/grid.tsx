import React from "react";
import HoverCard from "../hover/hoverCard";

const products = [
  {
    image: "/product1.png",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: "-30%",
    badgeColor: "#E97171",
  },
  {
    image: "/p2.png",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    badge: "",
  },
  {
    image: "/product3.png",
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    badge: "-50%",
    badgeColor: "#E97171",
  },
  {
    image: "/product4.png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
    badgeColor: "#2EC1AC",
  },
];

const ProductGrid: React.FC = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 py-8 px-4">
        {products.map((product, index) => (
          <HoverCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            badge={product.badge}
            badgeColor={product.badgeColor}
          />
        ))}
      </div>
    );
  };

export default ProductGrid;

