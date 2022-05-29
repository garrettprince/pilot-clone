import React from "react";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <main className="sticky top-0 z-50 grid grid-cols-2 bg-white">
        <div
          id="logo-container"
          className="relative flex h-10 items-center m-6"
        >
          <Image
            src="/assets/branding/full_logo_red.png"
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div id="menu-container" className="flex justify-end items-center">
          <MenuIcon className="h-10 w-10 m-6" />
        </div>
      </main>
    </div>
  );
}

export default Header;
