"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  // List of compliments
  const compliments = [
    "Чиний инээмсэглэл энэ хорвоогийн гэрэл гэгээ мэт санагдах юм. 😊",
    "Амьдралд хэцүү үе цөөндөө ч, битгий бууж өгөөрэй! 😊",
    "Чиний халуун дулаан үгс бусдад урам зориг өгдөг шүү! 😊",
    "Чамтай учирсан нь энэ орчлон ертөнцийн хамгийн том бэлэг билээ! 😊",
    "Эрүүл мэнддээ үргэлж анхаарч байгаарай, учир нь хүний амьдралд эрүүл мэндээс чухал зүйл байхгүй шүү! 😊",
    "За тийм байна даа! 😊 Өдрийг сайхан өнгөрүүлээрэй.",
  ];

  // List of images (replace with your actual image paths or URLs)
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
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

      {/* Top-right image, responsive */}
      <div className="fixed top-4 right-4 z-10">
        <img
          src={images[index % images.length]}
          alt={`image${index + 1}`}
          className="object-cover rounded-xl shadow-lg border-4 border-white bg-white/60"
          style={{
            width: "min(200px, 30vw)",
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </div>

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
          Солих
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

        @media (max-width: 640px) {
          .fixed.top-4.right-4.z-10 img {
            width: 80px !important;
            height: auto !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
