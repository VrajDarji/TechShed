"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Nav = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="px-10 py-3 flex justify-between items-center bg-white">
      <div className="flex flex-row justify-center items-center gap-7">
        <Link href="/">
          <h1 className="font-semibold text-4xl">TechShed</h1>
        </Link>
        <div className="flex flex-row justify-center items-center">
          <input
            type="text"
            placeholder="Search.."
            className="py-2 px-4  rounded-l-full h-10 border-[1px] text-base border-black outline-none w-[300px]"
          />
          <button
            type="button"
            className="px-5  py-2 rounded-r-full text-base  border-[1px] border-l-0 border-black h-10 bg-[#751fff]"
          >
            <Search size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        {isSignedIn ? (
          <button>
            <UserButton afterSignOutUrl="/" />
          </button>
        ) : (
          <Link href="/sign-up">Log In</Link>
        )}
        <button className="flex gap-1 justify-center items-center font-medium">
          <Heart size="20px" />
          Favourites
        </button>
        <button>
          <ShoppingCart size="20px" />
        </button>
      </div>
    </nav>
  );
};
export default Nav;
