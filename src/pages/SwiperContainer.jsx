import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
export default function SwiperContainer({ isDesktop = true, slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState();
  const activeSlide =slides?.find((item, index)=>index === activeIndex);
  return (
    <>
      <div className="container w-full flex justify-center items-center mx-auto px-4 mt-10">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          effect={isDesktop ? "coverflow" : "slide"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={isDesktop ? 3 : 1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          spaceBetween={10}
        >
          {slides?.map((item, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  setActiveIndex(index);
                  swiperRef?.slideToLoop(index);
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={item?.img}
                    alt="slide_image"
                    className="w-[400px] aspect-[3/4] object-cover rounded-[8px] !md:rounded-[2rem]"
                  />
                  <div className="mt-2 md:hidden">
                    <div className="cursor-pointer font-medium text-[24px] lg:text-[24px]">
                      {item?.title}
                    </div>
                    <div className="text-[16px]">{item?.content}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="md:flex justify-center flex-col items-center mt-5 hidden">
        <div className="text-[32px]">{activeSlide?.title}</div>
      </div>
    </>
  );
}
