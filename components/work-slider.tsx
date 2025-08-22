"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import { WORK_DATA } from "@/constants";

export const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 sm:h-120 max-w-195 mx-auto"
    >
      {WORK_DATA.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <ul className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map(({ title, path }, index) => (
              <li
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <Image src={path} alt={title} width={500} height={300} />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 group-active:opacity-80 transition-all duration-700" />
                <div className="absolute bottom-0 translate-y-full group-active:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  <div className="flex items-center gap-x-2 text-xs tracking-[0.2em]">
                    <h3 className="delay-100 uppercase">live</h3>
                    <h3 className="translate-y-[500%] group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-300 delay-150 uppercase">
                      project
                    </h3>
                    <BsArrowRight
                      size={20}
                      className="translate-y-[500%] group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-300 delay-200"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
