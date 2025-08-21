import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { About } from "@/components/about";
import { Avatar } from "@/components/avatar";
import { Circles } from "@/components/circles";

import { fadeIn } from "@/lib/variants";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full py-32 flex items-center bg-primary/30"
    >
      <div className=" container text-center xl:text-left">
        <Circles />
        <motion.div
          variants={fadeIn("right", 2.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden w-full h-full max-w-147.5 max-h-135.5 xl:flex absolute bottom-0 -left-70"
        >
          <Avatar />
        </motion.div>
        <About />
      </div>
    </motion.section>
  );
};

export default AboutPage;
