import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { TestimonialSlider } from "@/components/testimonial-slider";

import { fadeIn } from "@/lib/variants";

export const metadata: Metadata = {
  title: "Testimonials",
};

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full py-35 flex items-center bg-primary/30 text-center"
    >
      <div className="container space-y-4">
        <motion.div
          variants={fadeIn("up", 1.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h2 className="h2">
            What&apos;s clients <span className="text-accent">say.</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 1.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
