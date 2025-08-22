"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { TESTIMONIALS_DATA } from "@/constants";

export const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-110 mx-auto"
    >
      {TESTIMONIALS_DATA.map(({ image, name, position, message }, index) => (
        <SwiperSlide key={index}>
          <div className="h-full lg:px-16 flex flex-col md:flex-row items-center gap-x-8 cursor-pointer">
            <div className="relative w-full max-w-75 mx-auto xl:mx-0 flex flex-col items-center xl:justify-center">
              <div className="flex flex-col justify-center text-center">
                <Image
                  src={image}
                  alt={name}
                  width={100}
                  height={100}
                  className="mb-2 mx-auto"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-xs font-extralight uppercase tracking-widest">
                  {position}
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center before:w-0.25 xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-50 relative xl:pl-20">
              <FaQuoteLeft className="mx-auto md:mx-0 mb-4 text-4xl xl:text-6xl text-white/20" />
              <p className="xl:text-lg text-center md:text-left">{message}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
