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
    <section className="h-full   ">
      <div className="md:container md:m-auto xs:pt-12 md:pt-20 xs:px-4 md:px-0 ">
        <div className=" md:mx-4 xs:mt-[50px] xs:mb-[30px] lg:my-[60px] md:shadow-[0_6px_30px_rgba(0,0,0,.06)] md:mt-7 md:px-[40px] md:pt-[40px] md:pb-[40px]  rounded-lg ">
          <table className="table-fixed w-full">
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
            <tbody className="overflow-y-auto h-full">
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
                          className="rounded-full object-cover"
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
                        <div className="flex items-center xs:gap-[11px]  md:gap-6">
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
                            className="text-xs uppercase hover:underline hover:text-siteColor "
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
          <div className="flex xs:justify-center md:justify-end gap-4 mt-[30px]">
            <div className="text-siteColor items-center my-auto">
              {" "}
              ${countTotalPrice()}
            </div>

            <div className="bg-siteColor hover:bg-white hover:border-2 border-2 border-siteColor duration-500 w-fit rounded-md mt-[3px]">
              <button className="text-white py-3 px-9 hover:text-siteColor  duration-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
