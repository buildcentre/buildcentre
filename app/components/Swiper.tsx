import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "~/app.css";

import tilesBack from "~/media/images/tiles-background.jpg";

export default function App() {
  return (
    <>
      <Swiper className="mySwiper h-screen w-screen top-0 left-0">
        <SwiperSlide className="flex items-center">
          <img src={tilesBack} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
