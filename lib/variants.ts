import type { Transition, Variant } from "motion";

type VariantsMap = {
  [key: string]: Variant;
};

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number
): VariantsMap => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 1.5,
      delay,
      easing: [0.25, 0.6, 0.3, 0.8],
    } as Transition,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.4,
      delay,
      easing: [0.25, 0.25, 0.25, 0.75],
    } as Transition,
  },
});
