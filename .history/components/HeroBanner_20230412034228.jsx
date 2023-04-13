import { BiArrowBack } from "react-icons/bi";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function HeroBanner() {
  return (
    <div className="relative mx-auto w-full max-w-[1360px] text-[20px] text-white">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] bottom-0 z-10 flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-black hover:opacity-90 md:right-[51px] md:h-[50px] md:w-[50px]"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 z-10 flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-black hover:opacity-90 md:h-[50px] md:w-[50px]"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            src="/slide-1.png"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          <div className="absolute bottom-[25px] left-0 cursor-pointer bg-white px-[15px] py-[10px] font-oswald text-[15px] font-medium uppercase text-black/[0.9] hover:opacity-90 md:bottom-[75px] md:px-[40px] md:py-[25px] md:text-[30px]">
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/slide-2.png"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          <div className="absolute bottom-[25px] left-0 cursor-pointer bg-white px-[15px] py-[10px] font-oswald text-[15px] font-medium uppercase text-black/[0.9] hover:opacity-90 md:bottom-[75px] md:px-[40px] md:py-[25px] md:text-[30px]">
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/slide-3.png"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          <div className="absolute bottom-[25px] left-0 cursor-pointer bg-white px-[15px] py-[10px] font-oswald text-[15px] font-medium uppercase text-black/[0.9] hover:opacity-90 md:bottom-[75px] md:px-[40px] md:py-[25px] md:text-[30px]">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
}
