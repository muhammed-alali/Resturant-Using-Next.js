"use client";

import { Product, useCart } from "@/context/CartProvider";
import { FC } from "react";

interface Props {
  product: Product;
}

const Buying = ({ product }: { product: any }) => {
  const { updateCart } = useCart();
  const onAddToCartClick = () => {
    updateCart(product, 1);
  };

  return (
    <div className="flex p-2 space-x-2  w-[130px] h-[55px]">
      <button
        onClick={onAddToCartClick}
        className=" flex-1  bg-siteColor text-white  p-2 rounded-md "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Buying;
