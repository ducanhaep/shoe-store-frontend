import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/utils/api";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const subTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.attributes.price;
    }, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({ sessionId: res.stripeSession.id });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {!!cartItems.length && (
          <>
            {/* Heading and paragraphs start */}
            <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
              <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
                Shopping Cart
              </div>
            </div>
            {/*Heading and paragraphs end */}

            {/* Cart content start */}
            <div className="flex flex-col gap-12 py-10 lg:flex-row">
              {/* Cart item start */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              {/* Cart item end */}

              {/* Summary start */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="my-5 rounded-xl bg-black/[0.05] p-5">
                  <div className="flex justify-between">
                    <div className="text-md font-medium uppercase text-black md:text-lg">
                      Subtotal
                    </div>
                    <div className="text-md font-medium text-black md:text-lg">
                      &#36;{subTotal}
                    </div>
                  </div>
                  <div className="md:text-md mt-5 border-t py-5 text-sm">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                <button
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
                  onClick={handlePayment}
                >
                  Checkout
                  {loading && <img src="/spinner.svg" />}
                </button>
              </div>
              {/* Summary start  */}
            </div>
            {/* Cart content end */}
          </>
        )}

        {/* This is empty cart */}
        {cartItems.length < 1 && (
          <div className="flex flex-[2] flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt="empty cart"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="mt-4 text-center">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="mb-3 mt-8 rounded-full bg-black py-4 px-8 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
