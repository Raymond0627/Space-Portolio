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
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#9b44a6]/50 bg-[#2a0e6117] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin glow-effect"
          />
       <span className="mystical-font font-bold text-4xl ml-[10px] hidden md:block text-[#d78eff] hover:text-[#f1c6e1]">
  ORBA
</span>
        </a>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
