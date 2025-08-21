import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

export const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative size-46.25 flex items-center justify-center bg-circle-star bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/assets/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="w-full h-full max-w-35.25 max-h-37 animate-spin-slow"
        />
        <HiArrowRight
          size={36}
          className="absolute z-50 group-hover:translate-x-2 transition-all duration-300"
        />
      </Link>
    </div>
  );
};
