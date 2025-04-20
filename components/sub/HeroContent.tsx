"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Text Section */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[14px] border border-[#8f5fd9] bg-[#1a132f] rounded-full opacity-[0.95] inline-flex items-center justify-center"
        >
          <SparklesIcon className="text-[#c084fc] mr-2 h-5 w-5" />
          <h1 className="text-[13px] text-purple-300">
            Welcome to Mystic Visions
          </h1>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-[600px] leading-tight"
        >
          Discover the Secrets
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            Hidden in Your
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-6xl md:text-8xl lg:text-9xl font-extrabold">
            Future
          </span>
        </motion.h1>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-lg text-gray-300 my-5 max-w-[600px]"
        >
          Ask your question, draw three mystical cards, and let the universe
          guide your path. Are you ready to reveal your destiny?
        </motion.p>
        <motion.button
          onClick={() => {
            document.getElementById("Card-Selection")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          variants={slideInFromLeft(1)}
          className="py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg cursor-pointer mx-auto md:mx-0 max-w-[220px] text-center"
        >
          Reveal Your Destiny
        </motion.button>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mb-10 md:mb-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // 20 seconds for one full rotation (slow and magical)
          ease: "linear",
        }}
      >
        <Image
          src="/mystic-orb.png"
          alt="Mystic Orb"
          height={500}
          width={500}
          className="drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
