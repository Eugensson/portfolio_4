import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/assets/avatar.png"
        alt="Avatar image"
        width={590}
        height={542}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};
