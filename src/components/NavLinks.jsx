// "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ link }) => {
  const pathName = usePathname();

  return (
    <>
      <Link
        // className={"text-lg items-center px-4 py-1"}
        className={`flex items-center justify-center rounded-full font-mono h-10 w-1/2  hover:border-b-2 border-black dark:border-white dark:hover:border-b-2 transition-colors text-lg  ${
          pathName === link.url &&
          "border-2 border-black text-black dark:border-white dark:text-white"
          // "bg-black text-white dark:bg-white dark:text-stone-950 "
        }`}
        href={link.url}
      >
        <link.icon className="text-[2rem] p-1" />
        {link.title}
      </Link>
    </>
  );
};

export default NavLinks;
