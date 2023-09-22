"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

const Nav = () => {
  const { isSignedIn } = useAuth();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [sBox, setSBox] = useState(false);
  const fetchSearch = async (data) => {
    const url = "/api/data";
    const response = await fetch(url);
    try {
      const result = await response.json();
      const a = result.filter((e) => {
        return e.name.toLowerCase().includes(data);
      });
      setSearchData(a);
      console.log(a);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="px-10 py-3 flex justify-between items-center bg-white">
      <div className="flex flex-row justify-center items-center gap-7">
        <Link href="/">
          <h1 className="font-semibold text-4xl">TechShed</h1>
        </Link>
        <div className="flex flex-row justify-center items-center relative">
          <input
            type="text"
            placeholder="Search.."
            className="py-2 px-4  rounded-l-full h-10 border-[1px] text-base border-black outline-none w-[300px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
              fetchSearch(e.target.value);
              if (e.target.value === "") {
                setSBox(false);
              } else {
                setSBox(true);
              }
            }}
          />
          <button
            type="button"
            className="px-5  py-2 rounded-r-full text-base  border-[1px] border-l-0 border-black h-10 bg-[#751fff]"
          >
            <Search size={16} />
          </button>
          {sBox && (
            <>
              <div className="absolute w-full h-[40vh] bg-[#fff] border-2 top-[6vh] rounded-lg z-20 overflow-y-scroll px-3 py-2 flex-col gap-3">
                {searchData.length > 0 ? (
                  <>
                    {searchData.map((e, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row justify-between items-center"
                        >
                          <Image
                            width={100}
                            height={100}
                            alt="photo"
                            src={e.img}
                          />
                          <h1>{e.name}</h1>
                          <p>{e.price}</p>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <p className="capitalize text-center text-lg">
                    result not found
                  </p>
                )}
              </div>
            </>
          )}
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
