'use client'
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {

  const {user} = useUser();


  return (
    <nav className="flex items-center justify-between mb-2">
      <div className=" px-8 py-2 hover:cursor-pointer">
        <Link href="/"><Image src="/images/Unbenannt.webp" alt="Logo" width={60} height={60}/></Link>
      </div>

      <div className="flex gap-8 text-lg">
        <p>
          <Link href="/" className=" hover:text-[#ff9f1c]">Home</Link>
        </p>
        <p>
          <Link href="/browse" className=" hover:text-[#ff9f1c]">Browse</Link>
        </p>
      </div>

      {user ? (
        <div className="h-8 px-8 py-2" >
          <Link href="/userdashboard">
          <Avatar>
            <AvatarImage src={user.imageUrl} alt={user.fullName.charAt(0).toUpperCase()} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 px-8 py-2">
        <Button className="hover:text-[#ff9f1c]"><Link href="/sign-in">Login</Link></Button>
        <Button className="hover:text-[#ff9f1c]"><Link href="/sign-up">Register</Link></Button>
      </div>
      )}
      
    </nav>
  );
};

export default Navbar;
