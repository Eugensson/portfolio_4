import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={220}
        height={48}
        priority
      />
    </Link>
  );
};
