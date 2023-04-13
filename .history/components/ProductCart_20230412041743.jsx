import Image from "next/image";
import Link from "next/link";

export default function ProductCart() {
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
    </Link>
  );
}
