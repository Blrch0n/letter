"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  // List of compliments
  const compliments = [
    "Чиний минь инээмсэглэл энэ хорвоогийн гэрэл гэгээ мэт санагдах юм. 😊",
    "Амьдралд хэцүү үе цөөндөө ч, битгий бууж өгөөрэй! 😊",
    "Чиний минь халуун дулаан үгс бусдад урам зориг өгдөг шүү! 😊",
    "Чамтай учирсан нь энэ орчлон ертөнцийн хамгийн том бэлэг билээ! 😊",
    "Зза тйим байна даа! 😊 Өдөрийг сайхан өнгүүрээрэй.",
  ];

  // State for current compliment and fade animation
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Handle button click
  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      const nextIndex = (index + 1) % compliments.length;
      setIndex(nextIndex);
      setFade(false);
    }, 300);
  };

  return (
    <>
      <Head>
        <title>Захиа</title>
        <meta name="description" content="A random compliment just for you" />
      </Head>

      {/* Animated background */}
      <div className="animated-bg fixed inset-0 -z-10" />

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-3xl font-semibold mb-6 text-white drop-shadow-lg">
          💌 Захиа
        </h2>
        <div
          aria-live="polite"
          className={`min-h-[3rem] w-full max-w-md my-4 p-6 border-2 border-dashed border-white rounded-2xl transition-opacity duration-300 text-center text-lg font-medium text-[#ff9a9e] backdrop-blur-md bg-white/70 shadow-xl ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {compliments[index]}
        </div>
        <button
          onClick={handleClick}
          disabled={fade}
          className="px-8 py-3 bg-white bg-opacity-30 text-[#ff9a9e] rounded-2xl text-lg hover:scale-105 transform transition disabled:opacity-50 drop-shadow"
        >
          Намайг зөөлхөн хуруугаараа дараач
        </button>
      </main>

      {/* Global styles for background animation */}
      <style jsx global>{`
        .animated-bg {
          background: linear-gradient(
            270deg,
            #ff9a9e,
            #fad0c4,
            #fad0c4,
            #ff9a9e
          );
          background-size: 800% 800%;
          animation: vibe 15s ease infinite;
        }

        @keyframes vibe {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
