import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data: { attributes: product, id } }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="transform cursor-pointer overflow-hidden bg-white duration-200 hover:scale-105"
    >
      <Image
        width={500}
        height={500}
        src={product.thumbnail.data.attributes.url}
        alt={product.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#36;{product.price}</p>
          {product.original_price && (
            <>
              <p className="text-base font-medium line-through">
                &#36;{product.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(
                  product.original_price,
                  product.price
                )}
                % off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
