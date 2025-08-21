import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Header = () => {
  return (
    <header className="absolute z-30 w-full px-16 xl:px-0 xl:h-22.5">
      <div className="container w-full py-8 flex flex-col lg:flex-row items-center justify-between gap-y-6">
        <Logo />
        <Socials />
      </div>
    </header>
  );
};
