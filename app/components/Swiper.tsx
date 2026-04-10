import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "~/app.css";

import tilesSlide from "~/media/images/tiles-slide.jpg";
import sanitarywareSlide from "~/media/images/santaryware-slide.jpg";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <Swiper
        className="mySwiper h-screen w-screen top-0 left-0"
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={1000}
      >
        <SwiperSlide className="relative">
          <img
            src={sanitarywareSlide}
            alt=""
            className="h-full w-full absolute -z-10"
          />
          <div className="h-full w-full flex justify-center px-40 text-white bg-black/30 flex-col gap-4 slide-in">
            <h1 className="text-6xl uppercase font-bold">
              Luxury Bathroom & Sanitary Solutions
            </h1>
            <p className="text-2xl pe-150">
              From sanitaryware to fittings, we supply fully integrated systems
            </p>
            <Link
              to=""
              className="px-10 py-4 mt-10 w-fit font-semibold text-black bg-amber-300 hover:bg-amber-400 transition-all text-lg"
            >
              Explore Products
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={tilesSlide}
            alt=""
            className="h-full w-full absolute -z-10"
          />
          <div className="h-full w-full flex justify-center px-40 text-white bg-black/30 flex-col gap-4 slide-in">
            <h1 className="text-6xl uppercase font-bold">
              Premium Tiles & Surface Solutions
            </h1>
            <p className="text-2xl pe-150">
              High-quality porcelain, ceramic, and large-format surfaces for
              residential and commercial projects.
            </p>
            <Link
              to=""
              className="px-10 py-4 mt-10 w-fit font-semibold text-black bg-amber-300 hover:bg-amber-400 transition-all text-lg"
            >
              Explore Tiles
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
