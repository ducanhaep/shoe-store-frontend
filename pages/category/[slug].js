import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import useSWR from "swr";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const maxResult = 3;
export default function Category({ category, products, slug }) {
  const [pageIndex, setPageIndex] = useState(1);
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );
  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  return (
    <div className="relative w-full md:py-20">
      <Wrapper>
        <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
          <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            {category?.data[0]?.attributes?.name}
          </div>
        </div>

        <div className="my-14 grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>

        {/* Pagination start */}
        {data?.meta?.pagination?.total > maxResult && (
          <div className="my-16 flex items-center justify-center gap-3 md:my-0">
            <button
              className={`rounded bg-black py-2 px-4 text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded bg-black py-2 px-4 text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* Pagination end */}
        {isLoading && (
          <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-white/[0.5]">
            <img src="/logo.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
export async function getStaticPaths() {
  const categories = await fetchDataFromApi("/api/categories?populate=*");
  const paths = categories?.data.map((category) => ({
    params: {
      slug: category.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fetchCategory = fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const fetchProducts = fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );
  const [category, products] = await Promise.all([
    fetchCategory,
    fetchProducts,
  ]);
  return {
    props: { category, products, slug },
  };
}
