"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  const headings = [
    "Give Your Clothes a Second Life with ReWear 🌱",
    "Join the Sustainable Fashion Movement ♻️",
    "Swap, Redeem, and Reuse Fashion 👕",
  ];

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full bg-black text-white overflow-hidden">
      <Image
        src="/images/clothswap.webp"
        alt="Pile of folded clothes ready for swapping"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />


      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-[#0aefff]">
          {headings[currentHeading]}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
          Swap, Redeem, and Reuse — Join the sustainable fashion revolution.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link href="/swap">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg transition hover:cursor-pointer">
              Start Swapping
            </Button>
          </Link>
          <Link href="/browse">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg transition border border-gray-600 hover:cursor-pointer">
              Browse Items
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;
