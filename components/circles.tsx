import Image from "next/image";

export const Circles = () => {
  return (
    <div className="absolute right-0 -bottom-2 z-10 w-50 xl:w-75 mix-blend-color-dodge animate-pulse duration-75">
      <Image
        src="/assets/circles.png"
        width={260}
        height={200}
        alt="Circles"
        className="w-full h-full"
      />
    </div>
  );
};
