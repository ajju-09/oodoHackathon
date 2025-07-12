"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";

const Page = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#121212]">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-emerald-400">
          👤 User Profile
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-[#1e1e1e] rounded-xl shadow-lg p-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={user.imageUrl}
              alt={user.fullName || "User"}
              width={140}
              height={140}
              className="rounded-full border-4 border-emerald-400 shadow-lg"
            />

            <Link href="/uploaditem">
              <Button className="bg-emerald-500 hover:bg-emerald-600 transition-colors hover:cursor-pointer">
                Upload Item
              </Button>
            </Link>
          </div>

          <div className="space-y-3 text-base sm:text-lg">
            <p>
              <span className="text-gray-400">Name:</span>{" "}
              <span className="font-semibold text-white">
                {user.fullName.charAt(0).toUpperCase() + user.fullName.slice(1)}
              </span>
            </p>
            <p>
              <span className="text-gray-400">Username:</span>{" "}
              <span className="text-white">{user.username}</span>
            </p>
            <p>
              <span className="text-gray-400">Email:</span>{" "}
              <span className="text-white">
                {user.emailAddresses[0]?.emailAddress}
              </span>
            </p>
            <p>
              <span className="text-gray-400">Phone:</span>{" "}
              <span className="text-white">
                {user.phoneNumbers.length > 0
                  ? user.phoneNumbers[0].phoneNumber
                  : "N/A"}
              </span>
            </p>
            <p>
              <span className="text-gray-400">Joined:</span>{" "}
              <span className="text-white">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </p>
            <p>
              <span className="text-gray-400">Last Updated:</span>{" "}
              <span className="text-white">
                {new Date(user.updatedAt).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
