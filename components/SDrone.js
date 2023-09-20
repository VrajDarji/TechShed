import Link from "next/link";
const SDrone = () => {
  return (
    <div className="px-10 pb-10 w-full h-[80vh]">
      <div className="slap2 w-full h-full relative overflow-hidden">
        <div className="absolute top-[-8.5rem] left-[-6rem] w-[40vw] tilt h-[110vh] bg-white "></div>
        <div className="absolute top-0 left-0 h-full w-[29vw] flex flex-col gap-5 justify-center items-start px-10 z-10">
          <p className="text-lg font-semibold capitalize px-2 bg-red-600 w-fit">
            todays special
          </p>
          <p className="text-3xl font-semibold">best ariel view in town</p>
          <h1 className="text-7xl font-semibold">
            <span className="text-[#751fff]">30%</span> OFF
          </h1>
          <p className="text-3xl font-semibold">
            on professional camera drones
          </p>
          <p className="text-base">
            Limited quantities. See product detail pages for availability.
          </p>
          <Link href="/shop all?q=drones and cameras">
            <button className="py-2 px-10 text-white bg-[#751fff] text-xl font-medium tracking-wide rounded-3xl hover:bg-white hover:text-[#751fff] border-2 border-[#751fff] fadeout">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SDrone;
