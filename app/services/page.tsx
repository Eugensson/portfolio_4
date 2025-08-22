import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { Bulb } from "@/components/bulb";
import { Circles } from "@/components/circles";
import { ServicesSlider } from "@/components/services-slider";

import { fadeIn } from "@/lib/variants";

export const metadata: Metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full py-50 flex items-center bg-primary/30"
    >
      <Circles />
      <div className="container grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-8">
        <div className="mb-4 xl:mb-0 flex flex-col text-center lg:text-left">
          <motion.h2
            variants={fadeIn("up", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            My services <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-100 mx-auto lg:mx-0"
          >
            I craft modern websites and apps, blending clean code with
            thoughtful UI/UX. Explore projects that turn ideas into fast,
            accessible, beautiful products!
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("down", 1.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ServicesSlider />
        </motion.div>
      </div>
      <Bulb />
    </motion.section>
  );
};

export default Services;
