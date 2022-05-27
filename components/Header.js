import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <main className="flex">
        <div className="flex h-10 w-10">
          <Image
            src="/assets/branding/full_logo_red.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default Header;
