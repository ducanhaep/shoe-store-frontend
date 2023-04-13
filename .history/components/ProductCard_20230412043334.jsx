import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Link
      href={`/product/1`}
      className="transform cursor-pointer overflow-hidden bg-white duration-200 hover:scale-105"
    >
      <Image
        width={500}
        height={500}
        src="/product-1.webp"
        alt="product-1.webp"
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">shoe</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377; 100</p>
          <>
            <p className="text-base font-medium line-through">&#8377;100</p>
            <p className="ml-auto text-base font-medium text-green-500">
              {/* {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )} */}
              20 % off
            </p>
          </>
          {/* {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )} */}
        </div>
      </div>
    </Link>
  );
}
