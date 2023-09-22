"use client";
import Image from "next/image";
import { cat } from "@data/SbyCat";
import Link from "next/link";
const SbyCat = () => {
  return (
    <div className="w-full px-10 pb-10">
      <div className="w-full bg-white px-10 py-10 flex flex-col gap-5">
        <h1 className="text-center text-xl font-semibold capitalize">
          shop by category
        </h1>
        <div className="grid grid-cols-5 gap-x-11 px-10 gap-y-5 mt-5">
          {cat.map((e, index) => (
            <div
              key={index}
              className="w-full aspect-square flex flex-col gap-5"
            >
              <Link href={e.link}>
                <Image
                  src={e.img}
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-full aspect-square rounded-full"
                />
              </Link>
              <p className="text-center text-lg font-medium capitalize">
                {e.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SbyCat;
