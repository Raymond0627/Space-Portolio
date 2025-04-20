"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function CardSelection() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [question, setQuestion] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Simple form submission without animations first
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, birthDate, question });
    alert(`Submission received, ${name}! The spirits are working...`);
    
    // Reset form
    setName("");
    setBirthDate("");
    setQuestion("");
  };

  // Ensure form stays interactive
  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.pointerEvents = 'all';
      formRef.current.style.zIndex = '10';
      formRef.current.style.position = 'relative';
    }
  }, []);

  return (
    <div 
      id="Card-Selection" 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        position: 'relative',
        zIndex: 10,
      }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1a1a2e] p-8 rounded-xl border border-[#7042f88b] shadow-lg"
        style={{
          pointerEvents: 'all',
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          🔮 Your Fortune Awaits 🔮
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-purple-200 mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f0f23] text-white border border-[#4e31aa]"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 mb-2">Birth Date</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f0f23] text-white border border-[#4e31aa]"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 mb-2">Your Question</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f0f23] text-white h-32 border border-[#4e31aa]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
          >
            Reveal My Destiny
          </button>
        </div>
      </form>
    </div>
  );
}