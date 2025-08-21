import * as motion from "motion/react-client";

import { Avatar } from "@/components/avatar";
import { ProjectBtn } from "@/components/project-btn";
import { ParticlesContainer } from "@/components/particles-container";

import { fadeIn } from "@/lib/variants";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full bg-primary/60"
    >
      <ParticlesContainer />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex flex-col justify-center xl:pt-20 text-center xl:text-left container">
          <motion.h1
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas
            <br />
            into&nbsp;<span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 1.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10"
          >
            I create modern digital solutions that blend design and technology.
            My goal is to build experiences that inspire, engage, and deliver
            lasting value to every project.
          </motion.p>
          <div className="relative flex justify-center xl:hidden">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-300 h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge absolute translate-z-0" />
      </div>

      <motion.div
        variants={fadeIn("up", 1.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full max-w-147.5 max-h-135.5 absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
      >
        <Avatar />
      </motion.div>
    </motion.section>
  );
};

export default Home;
