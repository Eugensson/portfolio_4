import Image from "next/image";

export const TopLeftImage = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-50 xl:w-100 mix-blend-color-dodge opacity-50">
      <Image
        src="/assets/top-left-img.png"
        width={400}
        height={400}
        alt="Top Left Background Image"
      />
    </div>
  );
};
