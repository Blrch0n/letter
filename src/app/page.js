"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  // List of compliments
  const compliments = [
    "Your smile lights up this whole page! 😊",
    "You have a heart of pure gold.",
    "Talking with you makes my day so much brighter!",
    "You’re the best kind of person: you.",
    "Your creativity is seriously impressive.",
    "I bet you make every room feel cozier.",
    "Your laugh is absolutely contagious!",
    "You’re the definition of awesome.",
    "I admire how genuine you always are.",
    "You’ve got a fantastic sense of humor!",
  ];

  // State for current compliment and fade animation
  const [compliment, setCompliment] = useState("");
  const [fade, setFade] = useState(false);

  // Handle button click
  const handleClick = () => {
    // Trigger fade-out
    setFade(true);
    setTimeout(() => {
      // Pick a random compliment
      const idx = Math.floor(Math.random() * compliments.length);
      setCompliment(compliments[idx]);
      // Fade back in
      setFade(false);
    }, 300);
  };

  return (
    <>
      <Head>
        <title>Compliment for You</title>
        <meta name="description" content="A random compliment just for you" />
      </Head>
      <main className="flex flex-col items-center justify-center text-black min-h-screen bg-gray-50 p-4">
        <h2 className="text-3xl font-semibold mb-6">
          💌 A Compliment Just for You
        </h2>
        <div
          aria-live="polite"
          className={`min-h-[3rem] w-full max-w-md my-4 p-6 border-2 border-dashed border-purple-300 rounded-2xl transition-opacity duration-300 text-center text-lg font-medium ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {compliment}
        </div>
        <button
          onClick={handleClick}
          disabled={fade}
          className="px-8 py-3 bg-purple-300 text-white rounded-2xl text-lg hover:scale-105 transform transition disabled:opacity-50"
        >
          Get a Random Compliment
        </button>
      </main>
    </>
  );
}
