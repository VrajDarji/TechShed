"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomeBS = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("/api/data");
    try {
      if (response.ok) {
        const result = await response.json();
        const a = result.filter((e, index) => index % 2 === 0);
        setData(a.slice(0, 5));
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="px-10 pb-10">
      <div className="bg-white px-10 py-10 w-full flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-2xl">Best Sellers</h1>
        <div className="grid grid-cols-5">
          {data.map((e, index) => {
            return (
              <div
                className="w-full flex flex-col justify-start gap-3 items-start border-[1px] px-2 py-2"
                key={index}
              >
                <div className="w-[300px] h-[300px] overflow-hidden">
                  <Image
                    src={e.img}
                    alt="image"
                    width={300}
                    height={300}
                    className="w-[300px] h-[300px] object-cover hover:scale-110 fadein"
                  />
                </div>
                <h1 className="capitalize font-xl font-medium px-5">
                  {e.name}
                </h1>
                {e.sale ? (
                  <div className="flex flex-row gap-3 text-[#751fff] text-xl">
                    <p className="line-through px-5">${e.price}</p>
                    <p>${e.sale_price}</p>
                  </div>
                ) : (
                  <p className="px-5 text-[#751fff] text-xl">${e.price}</p>
                )}
              </div>
            );
          })}
        </div>
        <Link href="/shop all?q=best seller">
          <button className="px-10 py-2 rounded-3xl text-white bg-[#751fff]  hover:bg-white hover:text-[#751fff] border-2 border-[#751fff] fadeout">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HomeBS;
