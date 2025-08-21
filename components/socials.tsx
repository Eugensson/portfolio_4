import Link from "next/link";

import { SOCIALS_DATA } from "@/constants";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-x-6">
      {SOCIALS_DATA.map(({ label, link, icon: Icon }) => (
        <li key={label}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} link`}
            className="hover:text-accent transition-colors duration-300"
          >
            <Icon size={18} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
