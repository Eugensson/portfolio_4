"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import { SERVICES_DATA } from "@/constants";

export const ServicesSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-60 sm:h-85 max-w-195 mx-auto"
    >
      {SERVICES_DATA.map(({ icon: Icon, title, description }, index) => (
        <SwiperSlide key={index}>
          <div className="px-6 py-8 h-max flex sm:flex-col gap-x-6 sm:gap-x-0 rounded-lg bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition duration-300 cursor-pointer group">
            <Icon size={36} className="mb-4 text-accent" />
            <div className="mb-8">
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm xl:text-base leading-normal">
                {description}
              </p>
            </div>
            <RxArrowTopRight
              size={30}
              className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
