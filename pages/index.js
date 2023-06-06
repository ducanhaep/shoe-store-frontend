import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <main>
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
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: { products },
  };
}
