"use client";

import * as React from "react";
import { motion } from "framer-motion";

const MajorArcanaTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }} // <-- animate every time, trigger when half visible
      style={{
        textAlign: "center",
        marginTop: "5vh", // responsive top margin
        marginBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px"
      }}
    >
      <h1 style={{
        fontSize: "clamp(2rem, 5vw, 3rem)", // responsive font size
        fontWeight: "bold",
        background: "linear-gradient(90deg, #8e2de2, #4a00e0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        margin: 0,
        padding: 0
      }}>
        Major Arcana Cards
      </h1>
      <p style={{
        fontSize: "clamp(1rem, 2.5vw, 1.2rem)", // responsive paragraph size
        color: "#666",
        marginTop: "10px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        The Major Arcana is a series of 22 powerful tarot cards representing life's spiritual journey. 
        Each card reveals deep truths about growth, challenges, and transformation.
      </p>
    </motion.div>
  );
};

export default MajorArcanaTitle;
