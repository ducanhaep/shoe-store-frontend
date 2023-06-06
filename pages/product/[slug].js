import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ProductDetails({ product, products }) {
  const p = product?.data[0]?.attributes;
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col gap-[50px] md:px-10 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
            <ProductDetailCarousel images={p.image.data} />
          </div>
          <div className="flex-1">
            <div className="mb-2 text-[34px] font-semibold leading-tight">
              {p.name}
            </div>

            <div className="mb-5 text-lg font-semibold">{p.subtitle}</div>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">&#36;{p.price}</p>
              {p.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#36;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md mb-20 font-medium text-black/[0.5]">
              {`(Also includes all applicable duties)`}
            </div>

            {/* Size start */}
            <div id="sizesGrid" className="mb-10">
              <div className="mb-2 flex justify-between">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md cursor-pointer font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-md border py-3 text-center font-medium ${
                      item.enabled
                        ? "cursor-pointer hover:border-black"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${
                      selectedSize === item.size && item.enabled
                        ? "border-black"
                        : ""
                    }`}
                    onClick={() => {
                      if (!!item.enabled) {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* Size end */}
              {showError && (
                <div className="mt-1 text-red-600">
                  Size selection is required
                </div>
              )}
            </div>

            {/* Add to cart button start */}
            <button
              className="mb-3 w-full rounded-full bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to Cart
            </button>
            {/* Add to cart button end */}

            <div>
              <div className="mb-5 text-lg font-bold">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data.map((product) => ({
    params: {
      slug: product.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fetchProduct = fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const fetchProductList = fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );
  const [product, products] = await Promise.all([
    fetchProduct,
    fetchProductList,
  ]);
  return {
    props: { product, products },
  };
}
