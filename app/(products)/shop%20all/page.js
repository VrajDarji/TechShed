"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [q, setQ] = useState("");
  const [p, setP] = useState([]);
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
  }, [p, q]);

  return (
    <div className="px-10 py-5 flex flex-col gap-3 w-full bg-[#fff]">
      <h1 className="text-center font-semibold text-5xl capitalize py-2">
        {q === null ? `shop all` : q}
      </h1>
      <div className="grid g1 w-full">
        <div className="w-full flex flex-col gap-2">
          <h1 className="capitalize text-3xl py-3 border-b-2">filter by</h1>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex flex-row justify-end items-center  py-3 border-b-2 ">
            <h1 className="capitalize text-3xl">filter by</h1>
          </div>
          <div className="grid grid-cols-4 w-full">
            {p.map((e, index) => {
              return (
                <div
                  key={index}
                  className="w-full px-2 py-2 flex flex-col gap-1 "
                >
                  <Image
                    src={e.img}
                    alt="product_img"
                    width={412}
                    height={412}
                    className="w-full"
                  />
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
