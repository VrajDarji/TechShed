"use client";
import Link from "next/link";

const HomeCard2 = () => {
  return (
    <div className="px-10 py-10 grid grid-cols-2 gap-10 w-full h-[65vh]">
      <div className="w-full h-full bg-white hc21 grid grid-cols-2">
        <div className="flex flex-col px-10 py-10 text-white gap-4 justify-start items-start">
          <p className="capitalize text-xl font-medium">Holiday Deals</p>
          <h1 className="text-7xl font-semibold">Up to 30% off</h1>
          <p className="capitalize text-xl font-medium">
            selected smartphone brands
          </p>
          <Link href="/shop all?q=mobile">
            <button className="px-8 capitalize py-2 text-red-500 bg-white rounded-3xl font-semibold text-lg  hover:bg-[#b11f1c] hover:text-white border-2 border-white fadeout">
              shop
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full bg-white hc22 grid grid-cols-2">
        <div className="flex flex-col px-10 py-10 text-white gap-4 justify-start items-start">
          <p className="capitalize text-xl font-medium">just in</p>
          <h1 className="text-7xl font-semibold">take your sound anyehere</h1>
          <p className="capitalize text-xl font-medium">top headphone brands</p>
          <Link href="/shop all?q=headphone">
            <button className="px-8 capitalize py-2 text-purple-500 bg-white rounded-3xl font-semibold text-lg  hover:bg-[#583099] hover:text-white border-2 border-white fadeout">
              shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeCard2;
