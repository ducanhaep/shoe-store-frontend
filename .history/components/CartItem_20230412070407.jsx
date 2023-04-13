import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
export default function CartItem({ data }) {
  const p = data.attributes;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex gap-3 border-b py-5 md:gap-5">
      {/* IMAGE START */}
      <div className="aspect-square w-[50px] shrink-0 md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="flex w-full flex-col">
        <div className="flex flex-col justify-between md:flex-row">
          {/* PRODUCT TITLE */}
          <div className="text-lg font-semibold text-black/[0.8] md:text-2xl">
            {p.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="md:text-md block text-sm font-medium text-black/[0.5] md:hidden">
            {p.subtitle}
          </div>

          {/* PRODUCT PRICE */}
          <div className="md:text-md mt-2 text-sm font-bold text-black/[0.5]">
            MRP : &#8377;{p.price}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md hidden font-medium text-black/[0.5] md:block">
          {p.subtitle}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="md:text-md flex items-center gap-2 text-sm text-black/[0.5] md:gap-10">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-[16px] text-black/[0.5] hover:text-black md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
