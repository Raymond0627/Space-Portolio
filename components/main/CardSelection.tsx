"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef, useState as useStateHook } from "react";

export default function CardSelection({ id }: { id?: string }) {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [question, setQuestion] = useState("");
  
  // States to track when the element is in view
  const [inView, setInView] = useStateHook(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Birth Date:", birthDate);
    console.log("Life Question:", question);
    alert(`Thank you, ${name}! We'll look into your fortune ✨`);
  };

  // Variants for each form field animation
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Observer setup to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Element is in view, trigger animation
        } else {
          setInView(false);  // Optional: Reset or pause animation when out of view
        }
      },
      { threshold: .5 }  // Trigger animation when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      id={id}
      className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-transparent"
      initial="hidden" // Ensure initial state is hidden
      animate={inView ? "visible" : "hidden"} // Animate only if in view
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl">🔮 Let's Begin Your Fortune 🔮</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <motion.input
          type="text"
          placeholder="Your Initial Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none"
          required
          variants={inputVariants}
          custom={0} // First field, no delay
        />
        <motion.input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none"
          required
          variants={inputVariants}
          custom={1} // Second field, 0.3s delay
        />
        <motion.textarea
          placeholder="Ask your question about life..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400 h-32 resize-none focus:outline-none"
          required
          variants={inputVariants}
          custom={2} // Third field, 0.6s delay
        />
        <button
          type="submit"
          className="mt-4 p-3 rounded bg-[#4e31aa] hover:bg-[#6b42f5] transition-colors font-semibold"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
}
