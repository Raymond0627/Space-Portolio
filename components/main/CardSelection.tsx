"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

export default function CardSelection() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [question, setQuestion] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, birthDate, question });
    alert(`The spirits have heard you, ${name}! Your fortune will be revealed soon...`);
    setName("");
    setBirthDate("");
    setQuestion("");
  };

  return (
    <motion.div
      id="Card-Selection"
      ref={ref}
      className="min-h-screen flex items-center justify-center p-6 bg-transparent"
      style={{ position: "relative", zIndex: 30 }}
    >
      <motion.div
        className="w-full max-w-lg p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-800/60 to-purple-900/60 shadow-2xl border border-purple-400/30"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          opacity,
          scale,
          boxShadow: "0 0 30px 8px rgba(139, 92, 246, 0.4)",
        }}
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="inline-block p-2 mb-3 rounded-full border border-purple-300/50 bg-purple-500/20">
            <div className="text-3xl">🔮</div>
          </div>
          <h2 className="text-3xl font-bold text-purple-300">
            Unveil Your Destiny
          </h2>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="space-y-4" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Your Mystical Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-purple-300/30 text-white bg-purple-950/30 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
              placeholder="Enter your true name..."
              required
            />
          </motion.div>   

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 rounded-xl border border-purple-300/30 text-white bg-purple-950/30 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Your Burning Question
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-3 rounded-xl border border-purple-300/30 text-white bg-purple-950/30 placeholder-purple-400 h-28 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
              placeholder="What does the universe want to tell you?"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              type="submit"
              className="w-full py-3 px-5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reveal My Fortune
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
