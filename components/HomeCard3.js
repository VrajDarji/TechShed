"use client";
import { Percent, Truck, History, Package2 } from "lucide-react";
const divs = [
  { i: <Truck size={40} color="#751fff" />, t: "Curb-side pickup" },
  {
    i: <Package2 size={40} color="#751fff" />,
    t: "Free shipping on orders above $50",
  },
  { i: <Percent size={40} color="#751fff" />, t: "Low prices guranteed" },
  { i: <History size={40} color="#751fff" />, t: "Available to you 24/7" },
];
const HomeCard3 = () => {
  return (
    <div className="px-10 pb-10 w-full h-[20vh]">
      <div className="w-full h-full bg-white grid grid-cols-4">
        {divs.map((div, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center flex-row gap-4 text-2xl px-10 "
            >
              {div.i}
              <p className="text-center">{div.t}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeCard3;
