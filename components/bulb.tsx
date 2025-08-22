import Image from "next/image";

export const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 z-10 w-50 xl:w-65 rotate-12 mix-blend-color-dodge animate-pulse duration-75">
      <Image
        src="/assets/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};
