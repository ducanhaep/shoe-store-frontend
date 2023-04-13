import HeroBanner from "@/components/HeroBanner";
import ProductCart from "@/components/ProductCart";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <HeroBanner />
      <Wrapper>
        <div className="mx-auto my-[50px] max-w-[800px] text-center md:my-[80px]">
          <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
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
        </div>
      </Wrapper>
    </main>
  );
}
