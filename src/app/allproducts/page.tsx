"use client";
import { useCart } from "@/context/CartProvider";
import Image from "next/image";
import React from "react";

export default function AllProducts() {
  const {
    items: cartItems,
    updateCart,
    removeFromCart,
    countTotalPrice,
    clearCart,
  } = useCart();
  console.log("2222", cartItems);
  return (
    <section className="h-screen  space-y-10 ">
      <div className="md:container md:m-auto pt-24 xs:px-4 md:px-0">
        <div className="md:shadow-[0_6px_30px_rgba(0,0,0,.06)] md:mt-7 md:p-[40px] rounded-lg ">
          <table className="table-auto w-full">
            <thead className="border-b border-[#d9d9d9] ">
              <tr>
                <th className="text-start pb-4 xs:text-[12px] md:text-[16px]">
                  Product
                </th>
                <th className="text-start pb-4 xs:text-[12px] md:text-[16px]">
                  Price
                </th>
                <th className="text-start pb-4 xs:text-[12px] md:text-[16px]">
                  Quantity
                </th>
                <th className="text-start pb-4 xs:text-[12px] md:text-[16px]">
                  Subtotal
                </th>
                <th className="text-start pb-4 xs:text-[12px] md:text-[16px]">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto xs:h-[360px] lg:h-[380px] xl:h-[388px]">
              {cartItems.map((cartItem: any) => {
                return (
                  <>
                    {/* <div key={cartItem.product.id} className="p-4">
                    <div className="flex space-x-4"> */}
                    <tr className="w-full">
                      <td className="border-b border-[#d9d9d9]">
                        <Image
                          src={cartItem.product.url}
                          alt=""
                          className="rounded object-cover"
                          width={64}
                          height={64}
                        />
                        <h2 className="font-semibold xs:text-[13px] md:text-[16px]">
                          {cartItem.product.title}
                        </h2>
                      </td>

                      <td className="border-b border-[#d9d9d9]">
                        <h1>
                          {" "}
                          <span>$ </span>
                          {cartItem.product.price}
                        </h1>
                      </td>

                      <td className="border-b border-[#d9d9d9]">
                        <div className="flex items-center xs:gap-4  md:gap-6">
                          <button
                            onClick={() => updateCart(cartItem.product, -1)}
                          >
                            -
                          </button>
                          <span className="text-xs">{cartItem.count}</span>
                          <button
                            onClick={() => updateCart(cartItem.product, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="border-b border-[#d9d9d9]">
                        <div className=" text-gray-400 text-sm">
                          <span>{cartItem.count * cartItem.product.price}</span>
                        </div>
                      </td>

                      <td className="border-b border-[#d9d9d9]">
                        <div className="ml-auto">
                          <button
                            onClick={() => removeFromCart(cartItem.product)}
                            className="text-xs uppercase hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                  //   </div>
                  // </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
