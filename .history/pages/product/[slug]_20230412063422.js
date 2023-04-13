import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import Wrapper from "@/components/Wrapper";

export default function ProductDetails() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col gap-[50px] md:px-10 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
            <ProductDetailCarousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="mb-2 text-[34px] font-semibold leading-tight">
              Men shoe
            </div>

            <div className="mb-5 text-lg font-semibold">subtitle</div>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">MRP : $100</p>
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

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md mb-20 font-medium text-black/[0.5]">
              {`(Also includes all applicable duties)`}
            </div>

            {/* size */}
            <div className="mb-10">
              <div className="mb-2 flex justify-between">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md cursor-pointer font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
