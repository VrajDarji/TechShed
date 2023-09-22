"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cat } from "@data/SbyCat";
import { ChevronDown, Minus, Plus } from "lucide-react";
const Page = () => {
  const [q, setQ] = useState("");
  const [p, setP] = useState([]);
  const [sr, setSr] = useState(false);
  const [ShowCat, setShowCat] = useState(false);
  const [s, setS] = useState("Sort By");
  const fetchData = async (tag) => {
    const url = "/api/data";
    const response = await fetch(url);
    try {
      if (response.ok) {
        const result = await response.json();
        if (tag === null) {
          setP(result);
        } else if (tag === "sale") {
          const a = result.filter((e) => e.sale === true);
          setP(a);
        } else {
          const a = result.filter((e) => e.tag === tag);
          setP(a);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const a = new URLSearchParams(window.location.search);
    const b = a.get("q");
    setQ(b);
  });
  useEffect(() => {
    fetchData(q);
  }, [q]);

  return (
    <div className="px-10 py-5 flex flex-col gap-3 w-full bg-[#fff]">
      <h1 className="text-center font-semibold text-5xl capitalize py-2">
        {q === null ? `shop all` : q}
      </h1>
      <div className="grid g1 w-full">
        <div className="w-full flex flex-col gap-2">
          <h1 className="capitalize text-3xl py-3 border-b-2">filter by</h1>
          <div className="border-b-2 mr-10 pb-2">
            <div className="flex justify-between items-center flex-row ">
              <h1 className="text-xl py-3 font-medium">Categories</h1>
              {ShowCat ? (
                <button
                  onClick={() => {
                    setShowCat((prev) => !prev);
                  }}
                >
                  <Minus size={20} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowCat((prev) => !prev);
                  }}
                >
                  <Plus size={20} />
                </button>
              )}
            </div>
            {ShowCat && (
              <div>
                {cat.map((e, index) => {
                  return (
                    <Link key={index} href={e.link}>
                      <p className="capitalize text-sm ">{e.t}</p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex flex-row justify-end items-center  py-3 border-b-2 relative">
            <div
              className="w-[12vw] px-3 py-1 border-2  flex justify-between items-center cursor-pointer "
              onClick={() => {
                setSr(!sr);
              }}
            >
              <h1 className="capitalize text-base">{s}</h1>
              <button>
                <ChevronDown size={20} />
              </button>
            </div>
            {sr ? (
              <div className="absolute right-0 top-[3rem] z-50 py-1 w-[12vw] bg-[#fff] text-black flex flex-col gap-2 border-2 cursor-pointer">
                <p
                  className="px-3 py-1 hover:bg-[#ccc]"
                  onClick={(e) => {
                    setS(e.target.innerText);
                    setSr(false);
                    p.sort((a, b) => a.price - b.price);
                  }}
                >
                  Price(low to high)
                </p>
                <p
                  className="px-3 py-1 hover:bg-[#ccc]"
                  onClick={(e) => {
                    setS(e.target.innerText);
                    setSr(false);
                    p.sort((a, b) => b.price - a.price);
                  }}
                >
                  Price(high to low)
                </p>
                <p
                  className="px-3 py-1 hover:bg-[#ccc]"
                  onClick={(e) => {
                    setS(e.target.innerText);
                    setSr(false);
                    p.sort((a, b) => a.name.localeCompare(b.name));
                  }}
                >
                  Name A-Z
                </p>
                <p
                  className="px-3 py-1 hover:bg-[#ccc]"
                  onClick={(e) => {
                    setS(e.target.innerText);
                    setSr(false);
                    p.sort((a, b) => b.name.localeCompare(a.name));
                  }}
                >
                  Name Z-A
                </p>
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-4 w-full">
            {p.map((e, index) => {
              return (
                <div
                  key={index}
                  className="w-full px-2 py-2 flex flex-col gap-1 "
                >
                  <Link href={`/product?id=${index}`}>
                    <Image
                      src={e.img}
                      alt="product_img"
                      width={412}
                      height={412}
                      className="w-full"
                    />
                  </Link>
                  <h1 className="capitalize text-lg font-medium">{e.name}</h1>
                  {e.sale ? (
                    <div className="flex flex-row gap-4 text-[#751fff] text-lg font-semibold">
                      <p className="line-through">${e.price}</p>
                      <p>${e.sale_price}</p>
                    </div>
                  ) : (
                    <p className="text-[#751fff] text-lg font-semibold">
                      ${e.price}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
