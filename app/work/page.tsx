import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { Bulb } from "@/components/bulb";
import { Circles } from "@/components/circles";
import { WorkSlider } from "@/components/work-slider";

import { fadeIn } from "@/lib/variants";

export const metadata: Metadata = {
  title: "Work",
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full py-45 flex items-center bg-primary/30"
    >
      <Circles />
      <div className="container grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-8">
        <div className="mb-4 xl:mb-0 flex flex-col text-center lg:text-left">
          <motion.h2
            variants={fadeIn("up", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-12"
          >
            My work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-100 mx-auto lg:mx-0"
          >
            From landing pages to full-scale platforms, I design and develop
            solutions that merge creativity with functionality, ensuring smooth,
            engaging, and lasting user experiences.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("down", 1.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <WorkSlider />
        </motion.div>
      </div>
      <Bulb />
    </motion.section>
  );
};

export default Work;
