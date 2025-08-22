import type { Metadata } from "next";
import * as motion from "motion/react-client";
import { BsArrowRight } from "react-icons/bs";

import { Circles } from "@/components/circles";

import { fadeIn } from "@/lib/variants";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full py-40 flex items-center justify-center text-center xl:text-left bg-primary/30"
    >
      <Circles />
      <div className="container">
        <div className="w-full max-w-175 mx-auto flex flex-col">
          <motion.h2
            variants={fadeIn("up", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12 text-center"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="input"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john.doe@mail.com"
              className="input"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="input sm:col-span-2"
            />
            <textarea
              name="subject"
              id="subject"
              placeholder="Message"
              className="textarea sm:col-span-2"
            />
            <button
              type="button"
              className="btn flex items-center justify-center overflow-hidden rounded-full border border-white/50 hover:border-accent max-w-42.5 px-8 transition-all duration-300 group cursor-pointer"
            >
              <span className="group-hover:-translate-y-[120%] group-active:-translate-y-[120%] group-hover:opacity-0 group-active:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight
                size={22}
                className="-translate-y-[120%] opacity-0 group-hover:flex group-active:flex group-hover:translate-y-0 group-active:translate-y-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 absolute"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
