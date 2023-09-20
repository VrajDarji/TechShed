import Link from "next/link";
const SLap = () => {
  return (
    <div className="px-10 pb-10 w-full h-[80vh]">
      <div className="slap w-full h-full relative overflow-hidden">
        <div className="absolute top-[-9rem] right-[-6rem] w-[40vw] tilt h-[110vh] bg-white "></div>
        <div className="absolute top-[7rem] right-[33vw] w-[10vw] aspect-square bg-red-600 rounded-full flex justify-center items-center shadow-lg">
          <h1 className="px-10 capitalize text-3xl text-center text-white font-semibold tilt">
            best price
          </h1>
        </div>
        <div className="absolute top-0 right-0 h-full w-[29vw] flex flex-col gap-5 justify-center items-start px-10 z-10">
          <p className="text-3xl font-semibold">Save up to</p>
          <h1 className="text-7xl font-semibold">$150</h1>
          <p className="text-3xl font-semibold">
            on selected laptop & tablet brands
          </p>
          <p className="text-base">Terms and conditions apply</p>
          <Link href="/shop all?q=computers">
            <button className="py-2 px-10 text-white bg-[#751fff] text-xl font-medium tracking-wide rounded-3xl hover:bg-white hover:text-[#751fff] border-2 border-[#751fff] fadeout">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SLap;
