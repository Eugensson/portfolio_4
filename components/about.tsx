"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/variants";
import { ABOUT_DATA } from "@/constants";

export const About = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("right", 2.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          Captivating <span className="text-accent">stories</span> inspire
          magnificent designs.
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 2.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-150 mx-auto xl:mx-0 mb-6 xl:mb-8 px-2 xl:px-0"
        >
          I started my journey as a freelance web developer over 10 years ago.
          Since then, I&apos;ve worked remotely with agencies, consulted for
          startups, and contributed to digital products designed for both
          businesses and everyday users.
        </motion.p>
        <motion.div
          variants={fadeIn("right", 2.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
        >
          <ul className="flex flex-1 items-center gap-x-6">
            <li className="relative flex-1 after:w-0.25 after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0 max-w-30">
              <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={10} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                Years of experience
              </div>
            </li>
            <li className="relative flex-1 after:w-0.25 after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0 max-w-30">
              <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={250} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                Satisfied clients
              </div>
            </li>
            <li className="relative flex-1 after:w-0.25 after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0 max-w-30">
              <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={650} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                Finished projects
              </div>
            </li>
            <li className="relative flex-1 max-w-30">
              <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={8} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                Winning awards
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        variants={fadeIn("left", 2.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-120"
      >
        {/* Tabs */}
        <ul className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {ABOUT_DATA.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className={cn(
                "cursor-pointer capitalize xl:text-lg relative z-30 after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0",
                index === itemIndex &&
                  "text-accent after:w-full after:bg-accent after:transition-colors after:duration-300"
              )}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </li>
          ))}
        </ul>

        {/* Info */}
        <ul className="py-2 xl:py-6 flex flex-col items-center xl:items-start gap-y-2 xl:gap-y-4">
          {ABOUT_DATA[index].info.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex-1 flex flex-col md:flex-row items-center gap-x-2 max-w-max text-white/60"
            >
              <p className="mb-2 md:mb-0 font-light">{item.title}</p>

              {"stage" in item && (
                <>
                  <p className="hidden md:flex">-</p>
                  <p>{item.stage}</p>
                </>
              )}

              {"icons" in item && (
                <ul className="flex gap-x-4">
                  {item.icons.map((Icon, iconIndex) => (
                    <li key={iconIndex}>
                      <Icon size={24} className="text-white" />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
