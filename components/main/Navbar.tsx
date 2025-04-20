import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({
  weight: ["700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#9b44a6]/50 bg-[#2a0e6117] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <a
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-spin glow-effect md:w-[70px] md:h-[70px]"
          />
          <span className="mystical-font font-bold text-2xl md:text-4xl ml-2 md:ml-[10px] hidden md:block text-[#d78eff] hover:text-[#f1c6e1]">
            ORBA
          </span>
        </a>
        <div className="flex gap-3 md:gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={20}
              height={20}
              className="cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out md:w-[24px] md:h-[24px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
