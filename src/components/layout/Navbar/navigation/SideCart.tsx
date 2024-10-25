import AllProducts from "@/app/allproducts/page";
import { useCart } from "@/context/CartProvider";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  visible?: boolean;
  onRequestClose?(): void;
}

const SideCart: FC<Props> = ({ visible, onRequestClose }) => {
  const {
    items: cartItems,
    updateCart,
    removeFromCart,
    countTotalPrice,
    clearCart,
  } = useCart();
  const router = useRouter();
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <div
      style={{ right: visible ? "0" : "-130%" }}
      className="shadow-md transition-all xs:w-screen md:w-96 bg-white min-h-screen fixed right-0 top-0 flex flex-col z-50"
    >
      <div className="p-4 flex justify-between">
        <button
          onClick={onRequestClose}
          className="outline-none block   uppercase"
        >
          Close
        </button>
        <h1 className="font-semibold uppercase text-siteColor">Cart</h1>

        <button onClick={clearCart} className="uppercase text-sm">
          Clear
        </button>
      </div>
      <div className="w-full h-0.5 bg-gray-200" />

      <div className="overflow-y-auto xs:h-[470px] lg:h-[470px] xl:h-[470px]">
        {cartItems.map((cartItem: any) => {
          return (
            <div key={cartItem.product.id} className="p-4">
              <div className="flex space-x-4">
                <Image
                  src={cartItem.product.url}
                  alt=""
                  className="rounded object-cover"
                  width={64}
                  height={64}
                />
                <div className="flex-1 my-auto">
                  <h2 className="font-semibold">{cartItem.product.title}</h2>
                  <div className="flex gap-6">
                    <div className="flex text-gray-400 text-sm space-x-1">
                      <span>{cartItem.count}</span>
                      <span>x</span>
                      <span>{cartItem.count * cartItem.product.price}</span>
                    </div>
                    <div className="flex items-center justify-between xs:gap-[11px] gap-4">
                      <button onClick={() => updateCart(cartItem.product, -1)}>
                        -
                      </button>
                      <span className="text-xs">{cartItem.count}</span>
                      <button onClick={() => updateCart(cartItem.product, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ml-auto my-auto">
                  <button
                    onClick={() => removeFromCart(cartItem.product)}
                    className="text-xs uppercase hover:underline hover:text-siteColor"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-0.5 bg-gray-200" />

      <div className="pb-4 px-4">
        <div className="py-4  items-center">
          {/* <h1 className="font-semibold text-xl uppercase">Total</h1> */}
          <p className="font-semibold">
            <span className="text-gray-400 font-normal">
              {/* The total of your cart is: */}Total:
            </span>{" "}
            ${countTotalPrice()}
          </p>
        </div>

        <button
          onClick={() => {
            // clearCart();
            // if (isLoggedIn) {

            router.push("/allproducts");

            // } else {
            //   router.push("/auth/sign-in");
            // }
            onRequestClose && onRequestClose();
          }}
          className="border-2 border-orange-600 py-2 w-full rounded text-orange-600 uppercase"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SideCart;
