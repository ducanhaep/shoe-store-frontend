import HeroBanner from "@/components/HeroBanner";
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
      </Wrapper>
    </main>
  );
}
