"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imgs = [
  "https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1899,h_636,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png",
  "https://static.wixstatic.com/media/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png/v1/fill/w_1899,h_636,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png",
  "https://static.wixstatic.com/media/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png/v1/fill/w_1899,h_636,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png",
];
const HomeCard = () => {
  const [i, setI] = useState(0);
  const [imgSrc, setImgSrc] = useState(imgs[i]);
  const imgg = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setI((prev) => (prev + 1) % imgs.length);
      console.log(i);
    }, 5500);
    return () => clearTimeout(timer);
  }, [i]);
  useEffect(() => {
    imgg.current.style.opacity = 1;
    setImgSrc(imgs[i]);
    const timer = setTimeout(() => {
      imgg.current.style.opacity = 0.1;
    }, 5150);
    return () => clearTimeout(timer);
  }, [i]);

  return (
    <div className="w-full h-[85vh] relative">
      <Image
        src={imgSrc}
        alt="img"
        width={1707}
        height={645}
        className="w-full h-[85vh] fadein"
        ref={imgg}
      />
      <div className="absolute top-40 z-10 h-fit w-[50vw] px-20 py-10 flex flex-col justify-start items-start gap-1">
        <span className="min-w-fit py-[0.1rem] px-1  bg-red-600 capitalize text-white text-lg">
          best prices
        </span>
        <h1 className="text-7xl font-semibold w-[35vw]">
          Incredible Prices on All Your Favourite Items
        </h1>
        <p className="w-full text-lg ">Get more for less on selected brands</p>
        <button className="py-2 px-4 text-white capitalize rounded-3xl bg-[#751fff]  hover:bg-white hover:text-[#751fff] border-2 border-[#751fff] fadeout">
          shop now
        </button>
      </div>
    </div>
  );
};
export default HomeCard;
