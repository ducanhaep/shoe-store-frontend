import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
export default function Category() {
  return (
    <div className="relative w-full md:py-20">
      <Wrapper>
        <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
          <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            Running shoe
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
