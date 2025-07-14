import React from "react";
import Link from "next/link";
import { headerNav } from "../../utils/constant";
import { ListIcon } from "@/assets/icons";
const Header = () => {
  return (
    <div className="bg-primary p-4 ">
      <div className="container m-auto flex justify-between items-center text-white">
        <Link href={"/"} className="font-extrabold">
          LOGO
        </Link>
        <nav className="">
          <button className="hidden max-sm:block">
            <ListIcon />
          </button>
          <ul className="flex  items-center gap-10 text-sm max-sm:hidden">
            {headerNav.map((nav) => (
              <li key={nav.label} className="text-white uppercase">
                <Link href={nav.link}> {nav.label}</Link>
              </li>
            ))}
            <li>
              <button className="bg-tag rounded-md py-1 px-4 font-semibold  text-foreground-secondary">
                LOGIN/SIGNUP
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
