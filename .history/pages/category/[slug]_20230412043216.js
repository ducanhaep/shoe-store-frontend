import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import ProductCart from "@/components/ProductCart";
export default function Category() {
  return (
    <div className="relative w-full md:py-20">
      <Wrapper>
        <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
          <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            Running shoe
          </div>
        </div>

        <div className="my-14 grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </Wrapper>
    </div>
  );
}
