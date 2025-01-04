import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HoverCardProps {
  image: string;
  title: string;
  description: string;
  price: string,
  originalPrice?: string,
  badge?: string,
  badgeColor?: string,
}

const HoverCard: React.FC<HoverCardProps> = ({ image, title, description, price, originalPrice, badge, badgeColor }) => {
  return (
    <div className="relative tracking-wide group w-[285px] h-[446px] bg-white shadow-md overflow-hidden hover:-translate-y-2 transition-all">
      {/* Product Image */}
      <div className="relative">
        <Image src={image} alt={title} width={285} height={301} className="w-[285px] h-[301px] object-cover" />
            {/* Badge */}
            {badge && (
                <div
                className="w-10 h-10 flex items-center justify-center rounded-full absolute top-3 right-3"
                style={{ backgroundColor: badgeColor }} // Dynamically set the badge color
              >
                <h3 className="text-white text-sm">{badge}</h3>
              </div>
      )}
      {/* after hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link href={"/pages/cart"}><button className="bg-white text-[#B88E2F] py-4 px-12 font-lg font-bold mb-3">
            Add to cart
          </button></Link>
          <div className="flex mt-4 gap-4 font-semibold">
            <button className="flex gap-1 text-white text-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="mt-1">
                    <path fill="currentColor" d="M17.5 3.25a2.75 2.75 0 1 1-1.451 5.086a1 1 0 0 1-.089.052l-6.713 3.48a3 3 0 0 1 0 .264l.013.008l6.416 3.802a2.75 2.75 0 1 1-.912 1.784L8.42 13.968a2.75 2.75 0 1 1 .008-3.928l6.415-3.326A2.75 2.75 0 0 1 17.5 3.25"></path>
                </svg>Share</button>
            <button className="flex gap-1 text-white text-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 32 32" className="mt-1">
                    <path fill="currentColor" d="M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z"></path>
                </svg>Compare</button>
            <button className="flex gap-1 text-white text-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 256" className="mt-1">
                    <path fill="currentColor" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></path>
                </svg>Like</button>
          </div>
        </div>
      </div>

      {/* Product Details */}
        <div className="p-6 bg-[#F4F5F7]">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <h4 className="text-[#898989] text-md my-2">{description}</h4>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-lg font-bold text-gray-800">{price}</p>
          {originalPrice && (
            <p className="text-[#898989] text-md pl-2 line-through text-gray-500">{originalPrice}</p>
          )}
        </div>
        </div>
    </div>
  );
};

export default HoverCard;
