import Link from "next/link";
import React from "react";

const ProductCard = ({ href, productName, explanation,btnLearn, btnFind }) => {
  return (
    <Link
      href={href}
      className="transform overflow-hidden bg-white duration-300 hover:scale-105"
    >
      <div className="m-4 border-b-4 border-customRed">
        <div className="p-4 text-black/[0.9] border border-customBorderColor bg-white">
          <h2 className="text-lg font-medium">{productName}</h2>
          <div className="flex justify-between items-center">
            <p className="my-2 text-md text-customTextColor">{explanation}</p>
          </div>
          <div className="flex gap-x-2 mt-4">
            <button className="text-customRed shadow-custom-shadow bg-customPink p-4 text-xs w-full uppercase font-semibold">
              {btnLearn}
            </button>
            <button className="bg-customRed shadow-custom-shadow text-white p-4 text-xs w-full uppercase font-semibold">
              {btnFind}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
